import React, {useState, useRef} from 'react';
import {toggleLogin} from "./loginSlice";
import User from "../../app/interfaces/User"
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import styles from "../styles/navbar.module.css"
const LoginForm = () => {
    const loginRef = useRef<HTMLFieldSetElement | null>(null);
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
        <fieldset >
            <form onSubmit={handleLoginAttempt} className={styles.login} >
                {loginFailed &&
                    <h4>Wrong Username or Password.</h4>
                }
                <div className={styles.inputContainer}>
                    <label htmlFor="un"> Username:</label>
                    <input id="un" type="text" name="username" value={username}/>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="pw"> Password:</label>
                    <input id="pw" type="password" name="password" value={password}/>
                </div>
                <div className={styles.inputContainer}>
                <input type="submit" value="Login"/>
                </div>
            </form>
        </fieldset>
    </>
}

export default LoginForm;