import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../hooks";
import {REGISTER_BASIC, REGISTER_DETAILS, REGISTER_CONFIRM} from "../../components/RegistrationForm/registerSlice";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

// TODO: MODE STATE SEPERATELY -> seperate handler ( or inline !! ) for button on click event, remove default event handler on changeEvent
//


    // TODO:
    // for this switch state logic it needs to disable "back" on basic, "next" on
const UserRegistration = () => {
    return <>
        <RegistrationForm />
    </>
}

export default UserRegistration;