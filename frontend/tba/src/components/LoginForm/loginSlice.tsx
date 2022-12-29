import {createSlice, createAction, PayloadAction} from "@reduxjs/toolkit";
import User from "../../app/interfaces/User";
import {defaultUser} from "../../app/interfaces/User";
interface loginState {
    isAuth: boolean,
    user: User
}

const initialState: loginState = {
    isAuth: false,
    user: defaultUser
}


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        toggleLogin: (state: loginState, action: PayloadAction<User>) => {
            state.user = state.isAuth ? defaultUser : action.payload;
            state.isAuth =  !state.isAuth;
        }
}
})


export const {toggleLogin} = loginSlice.actions;
export default loginSlice.reducer;