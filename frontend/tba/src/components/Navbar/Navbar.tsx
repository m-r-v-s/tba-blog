import React, {useState} from 'react';
import styles from "../styles/navbar.module.css"
import {Link} from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";


const Navbar = () => {
    const [loginExpanded, setLoginExpanded] = useState(false);

    return <>
        <nav className={styles.navBox}>
                <div className={styles.linkContainer}>
                    <Link to="/explore">Explore</Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link to="/contribute">Contribute</Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link to="/about">About</Link>
                </div>
                <div className={styles.authContainer}>
                    <button
                        onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => setLoginExpanded((!loginExpanded))}> Login
                    </button>
                </div>
        </nav>
        {loginExpanded &&
                <LoginForm/>
        }
    </>
}
export default Navbar;

