import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../../utils/firebase/firebase.utils';

export interface UserState {
    currentUser: UserData | null;
}

const INITIAL_STATE: UserState = {
    currentUser: null,
}

export const userSlice = createSlice({
    name: 'users',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<UserData | null>) => {
            state.currentUser = action.payload
        }
    }
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
