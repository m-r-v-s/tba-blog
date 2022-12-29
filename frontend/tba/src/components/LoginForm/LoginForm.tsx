import React, {useState} from 'react';
import {toggleLogin} from "./loginSlice";
import User from "../../app/interfaces/User"
import {useAppDispatch, useAppSelector} from "../../app/hooks";


const LoginForm = () => {
    const [loginExpanded, setLoginExpanded] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);
    const [user, setUser] = useState<User | undefined>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const state = useAppSelector((state) => state.login.user.username)

    async function getUser(username: string) {
        try {
            let response = await fetch(`http://localhost:8080/user/get/${username}`);
            var body = await response.json();
        } catch (e: any) {
            console.log(e.message);
            return;
        }
        setUser(body);
    }

    function handleLoginAttempt(e: React.FormEvent<HTMLFormElement>) {
        //fetch(`http://localhost:8080/user/get/${e.currentTarget.value}`).then((response) => response.json()).then((res) => setUser(res));
        getUser(username);
        if ( user && user.username.length != 0 && user.password == password) {
            dispatch(toggleLogin(user));
        } else setLoginFailed(true);
    }


    return <>
        <button onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => setLoginExpanded((true))}> Login
        </button>
        {loginExpanded &&
        <fieldset>
            <form onSubmit={handleLoginAttempt}>
                {loginFailed &&
                    <h4>Wrong Username or Password.</h4>
                }
                <input type="text" name="username" value={username}/>
                <input type="password" name="password" value={password}/>
                <input type="submit" value="Login"/>
            </form>
        </fieldset> }
    </>
}

export default LoginForm;