import registerReducer from "../../components/RegistrationForm/registerSlice";
import counterReducer from "../../components/counter/counterSlice";
import {combineReducers} from "@reduxjs/toolkit";

 const allReducers = combineReducers(
    {
        counter: counterReducer,
        register: registerReducer,
    }
)
export default  allReducers;