import React from "react";
import style from "./Authentication.module.scss";

interface IProps {
    authController: any,
}

const Authentication: React.FC<IProps> = (props) => {
    let [form, selectForm] = React.useState("login");
    const [LoginData, setLogin] = React.useState({
        email: "",
        password: "",
        remember: false,
    });
    const [RegisterData, setRegister] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        remember: false,
    });
    let [isCorrect, corrected] = React.useState(true);

    React.useEffect(() => {
        if(props) {
            const script = document.createElement("script");

            script.src = "https://maxdudko.github.io/Assistant/animation.js";
            script.async = true;

            document.body.appendChild(script);
        }
    }, [props]);

    const authSubmit = (form:string) => {
        if(form === "login") {
            props.authController("login", LoginData);
        }
        if(form === "register") {
            if(RegisterData.password === RegisterData.confirmPassword) {
                delete RegisterData["confirmPassword"];
                props.authController("register", RegisterData)
            } else {
                if(RegisterData.password !== "" && RegisterData.confirmPassword !== "") corrected(false);
            }
        }
    };

    const Login: any = (
        <div className={style.login}>
            <h4>Login:</h4>
            <label>
                Email:
                <input type="text" placeholder="UserEmail@example.com"
                       onChange={(e) => setLogin({...LoginData, email: e.target.value})}
                />
            </label>
            <label>
                Password:
                <input type="password" placeholder="*******"
                       onChange={(e) => setLogin({...LoginData, password: e.target.value})}
                />
            </label>
            <p>
                <input type="checkbox" defaultChecked={LoginData.remember}
                       onChange={(e) => setLogin({...LoginData, remember: e.target.checked})}
                />
                 Remember Me
            </p>
            <button onClick={() => authSubmit("login")}>Login</button>
        </div>
    );

    const Register: any = (
        <div className={style.register}>
            <h4>Register:</h4>
            <label>
                Email:
                <input type="email" placeholder="UserEmail@example.com"
                       onChange={(e) => setRegister({...RegisterData, email: e.target.value})}
                />
            </label>
            <label>
                Password:
                <input type="password" placeholder="*******" className={isCorrect ? style.correct : style.inCorrect}
                       onChange={(e) => setRegister({...RegisterData, password: e.target.value})}
                />
            </label>
            <label>
                Confirm Password:
                <input type="password" placeholder="*******" className={isCorrect ? style.correct : style.inCorrect}
                       onChange={(e) => setRegister({...RegisterData, confirmPassword: e.target.value})}
                />
            </label>
            <p>
                <input type="checkbox" defaultChecked={RegisterData.remember}
                       onChange={(e) => setLogin({...RegisterData, remember: e.target.checked})}
                />
                 Remember Me
            </p>
            <button onClick={() => authSubmit("register")}>Register</button>
        </div>
    );

    return (
        <div className={style.Authentication + ' app-content'}>
            <div className={style.form}>
                <h1>Welcome to Assistant!</h1>
                <h4>
                    Please
                    <span onClick={() => selectForm("login")}>
                        Login
                    </span>
                     or
                    <span onClick={() => selectForm("register")}>
                        Register
                    </span>
                </h4>
                {
                    (form === "login") ?
                        Login
                        :
                        Register
                }
            </div>
        </div>
    )
};

export default Authentication;
