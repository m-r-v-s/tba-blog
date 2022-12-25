import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {REGISTER_BASIC, REGISTER_DETAILS, REGISTER_CONFIRM} from "./registerSlice";
import RegisterBasic from "./registerBasic";
import RegisterDetails from "./registerDetails";



export default function RegisterForm() {
    const dispatch = useAppDispatch();
    let mode = useAppSelector(state => state.register.input_mode
    );
    switch (mode) {
        case REGISTER_BASIC:
            return <RegisterBasic/>;
            break;
        case REGISTER_DETAILS:
            return <RegisterDetails/>;
            break;
        case REGISTER_CONFIRM:
            return <></>;
            break;
        default:
            return <> <h1> Fuck</h1></>;
    }
}
