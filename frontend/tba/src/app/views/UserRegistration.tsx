import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../hooks";
import {REGISTER_BASIC, REGISTER_DETAILS, REGISTER_CONFIRM} from "../../components/RegistrationForm/registerSlice";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

type inputHandler = (inputState: FormState, e: React.ChangeEvent<HTMLInputElement>) => void;
type modeHandler = (inputState: FormState, e: React.MouseEvent<HTMLButtonElement>) => void;
type selectHandler = (inputState: FormState, e: React.ChangeEvent<HTMLSelectElement>) => void;


export interface FormState {
    input_mode: "REGISTER_BASIC" | "REGISTER_DETAILS" | "REGISTER_CONFIRM",
    user_input: FormInput,
    set_form: inputHandler,
    set_mode: modeHandler,
    set_select: selectHandler,
};


// TODO: MODE STATE SEPERATELY -> seperate handler ( or inline !! ) for button on click event, remove default event handler on changeEvent
//
export interface FormInput {
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    country: string,
    email: string
}

export default function UserRegistration() {
    const [UserInput, SetUserInput] = useState<FormState>({
        input_mode: "REGISTER_BASIC", user_input: {
            country: "",
            email: "",
            firstname: "",
            lastname: "",
            password: "",
            username: "",
        },
        set_form: (() => {
        }) as unknown as inputHandler,
        set_mode: (() => {
        }) as unknown as modeHandler,
        set_select: (() => {
        }) as unknown as selectHandler,

    });

    const handleSelect = (inputState: FormState, e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        SetUserInput({...inputState, user_input: {...inputState.user_input, country: e.currentTarget.value}});

    }
    const handleMode = (inputState: FormState, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        switch (e.currentTarget.name) {
            case "next":
                SetUserInput({
                    ...inputState,
                    input_mode: inputState.input_mode == REGISTER_BASIC ? REGISTER_DETAILS : REGISTER_CONFIRM
                });
                console.log("next switched");
                break;
            case "back":
                SetUserInput({
                    ...inputState,
                    input_mode: inputState.input_mode == REGISTER_DETAILS ? REGISTER_BASIC : REGISTER_DETAILS
                });
                console.log("back switched");
                break;
        }
    }
    const handleInput = (inputState: FormState, e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        switch (e.currentTarget.name) {
            case "username":
                SetUserInput({...inputState, user_input: {...inputState.user_input, username: e.currentTarget.value}});
                console.log("username typed");
                break;
            case "password":
                SetUserInput({...inputState, user_input: {...inputState.user_input, password: e.currentTarget.value}});
                break;
            case "firstname":
                SetUserInput({...inputState, user_input: {...inputState.user_input, firstname: e.currentTarget.value}});
                break;
            case "lastname":
                SetUserInput({...inputState, user_input: {...inputState.user_input, lastname: e.currentTarget.value}});
                break;
            case "email":
                SetUserInput({...inputState, user_input: {...inputState.user_input, email: e.currentTarget.value}});
                break;
            default:
                console.log("unknown element name in Input form switch-case");

        }
    }
    // TODO:
    // for this switch state logic it needs to disable "back" on basic, "next" on

    return <>
        <RegistrationForm input_mode={UserInput.input_mode} user_input={UserInput.user_input} set_form={handleInput}
                          set_mode={handleMode} set_select={handleSelect}/>
    </>
}
