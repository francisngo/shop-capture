import {
	createContext,
	useState,
	useEffect,
	ReactNode,
	Dispatch,
	SetStateAction,
} from "react";
import { User as FirebaseUser } from "firebase/auth";
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

interface User {
	uid: string;
	email: string;
	displayName: string;
}

interface UserContextType {
	currentUser: User | null;
	setCurrentUser: Dispatch<SetStateAction<User | null>>;
}

interface UserProviderProps {
	children: ReactNode;
}

export const UserContext = createContext<UserContextType>({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }: UserProviderProps) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const value: UserContextType = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(
			(user: FirebaseUser | null) => {
				if (user) {
					createUserDocumentFromAuth(user);
				}
				setCurrentUser(user as User | null);
			}
		);
		return unsubscribe;
	}, []);

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};
