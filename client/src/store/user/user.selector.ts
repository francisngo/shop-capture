import { RootState } from '../store';
import { UserData } from '../../utils/firebase/firebase.utils';

export const selectCurrentUser = (state: RootState): UserData | null => state.user.currentUser