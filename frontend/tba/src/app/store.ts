import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import counterReducer, {counterSlice} from '../components/counter/counterSlice';
import registerReducer from "../components/RegistrationForm/registerSlice";
import allReducers from "../globalstate/reducers";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        register: registerReducer,

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
