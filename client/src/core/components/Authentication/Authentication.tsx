import React from "react";
import style from "./Authentication.module.scss";
import logo from "../../../assets/img/mern.png";


interface IProps {
    authController: any,
}

const Authentication: React.FC<IProps> = (props) => {
    // const [ active, setActive ] = React.useState(null);

    return (
        <div className={style.Authentication + ' app-content'}>
            <nav className={style.navbar}>
                <div className={style.title_logo}>
                    <img src={logo} alt="#"
                         className={style.logo}
                    />
                    <span className={style.title}>
                        Assistant
                    </span>
                </div>
                <div className={style.menu}>
                    <div className={style.btn}>Login</div>
                    <div className={style.btn}>Register</div>
                </div>
            </nav>
            <div className={style.form}>
                <div className={style.login}>
                    <h4>Login</h4>
                    <label>
                        Login:
                        <input type="text" placeholder="Login"/>
                    </label>
                    <label>
                        Password:
                        <input type="password" placeholder="*******"/>
                    </label>
                    <p>
                        <input type="checkbox" />
                        Remember Me:
                    </p>
                    <button onClick={() => props.authController()}>Login</button>
                </div>

                <div className={style.register}>
                    <h4>Register</h4>
                    <label>
                        Login:
                        <input type="text" placeholder="Login"/>
                    </label>
                    <label>
                        Email:
                        <input type="email" placeholder="email@example.com"/>
                    </label>
                    <label>
                        Password:
                        <input type="password" placeholder="*******"/>
                    </label>
                    <label>
                        Confirm Password:
                        <input type="password" placeholder="*******"/>
                    </label>
                    <p>
                        <input type="checkbox" />
                        Remember Me:
                    </p>
                    <button onClick={() => props.authController()}>Register</button>
                </div>

            </div>

        </div>
    )
};

export default Authentication;

