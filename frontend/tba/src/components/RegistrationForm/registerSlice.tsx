import { createSlice, createAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {RootState} from "../../app/store";

export const REGISTER_BASIC = "REGISTER_BASIC";
export const REGISTER_DETAILS = "REGISTER_DETAILS";
export const REGISTER_CONFIRM = "REGISTER_CONFIRM";

const registerBasic = createAction<registerState>('incrementBy')

export interface registerState {
    input_mode: "REGISTER_BASIC" | "REGISTER_DETAILS" | "REGISTER_CONFIRM",
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    country: string,
    email: string
}

const initialState: registerState = {
    input_mode: REGISTER_BASIC,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    country: "",
    email: ""
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers:{
        nextView: (state, action:PayloadAction<registerState>) =>
        {
            switch (action.payload.input_mode)
            {
                case REGISTER_BASIC:
                    state.input_mode = REGISTER_DETAILS;
                    break;
                case REGISTER_DETAILS:
                    state.input_mode = REGISTER_CONFIRM;
                    break;
                case REGISTER_DETAILS:
                    state.input_mode = REGISTER_BASIC;
                    break;
                default:
                    state.input_mode = REGISTER_BASIC;
            };
        },
        prevView: (state, action:PayloadAction<registerState>) =>
        {
            switch (action.payload.input_mode)
            {
                case REGISTER_BASIC:
                    state.input_mode = REGISTER_BASIC;
                    break;
                case REGISTER_DETAILS:
                    state.input_mode = REGISTER_BASIC;
                    break;
                case REGISTER_DETAILS:
                    state.input_mode = REGISTER_DETAILS;
                    break;
                default:
                    state.input_mode = REGISTER_BASIC;
            };
        },
        updateBasic: (state, action: PayloadAction<registerState>) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        updateDetails: (state, action: PayloadAction<registerState>) => {
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.country = action.payload.country;
            state.email = action.payload.email;
        }
    }
})

export const { nextView, prevView, updateBasic, updateDetails } = registerSlice.actions;
export default registerSlice.reducer;
