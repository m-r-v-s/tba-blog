import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import counterReducer, {counterSlice} from '../components/counter/counterSlice';
import loginReducer from '../components/LoginForm/loginSlice'
import allReducers from "../globalstate/reducers";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        login: loginReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
