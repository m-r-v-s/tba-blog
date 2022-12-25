import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {nextView, prevView, updateBasic} from "./registerSlice";



export default function RegisterBasic(this: any) {
    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState(() => {
            return e.target == null ? null : {value: e.currentTarget.value};
        });
    }
    return <>
        <div>
            <FormContext.
            <form>
                <label> Chose a Username and Password: </label>
                <input type="text" id="Username" onChange={handleInput}/>
                <input type="password" id="password" onChange={handleInput}/>
                <input type="submit" value="Next" onClick={() => {
                    dispatch(nextView);
                    dispatch(updateBasic);
                }}>
                    Next
                </input>
                <input type="submit" value="Back" onClick={() => {
                    dispatch(prevView);
                    dispatch(updateBasic);
                }}>
                    Back
                </input>
            </form>
        </div>
    </>
}