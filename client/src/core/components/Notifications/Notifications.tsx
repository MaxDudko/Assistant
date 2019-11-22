import React from "react";
import style from "./Notifications.module.scss";

interface IProps {
    notifications: any,
}

const Notifications: React.FC<IProps> = (props) => {
    const messages = () => {
        let list = props.notifications.map((m: any, i: number) => (
                <div className={style.message} key={i}>
                    <div className={style.head}>
                        <b className={style.title}>{m.title}</b>
                        <span className={style.subtitle}>from: <a href="/#">{m.from}</a></span>
                        <span className={style.subtitle}>{m.date}</span>
                    </div>
                    <div className={style.body}>
                        <p>
                            {m.text}
                        </p>
                    </div>
                </div>
            )
        );
        return list;
    };

    return (
        <div className={style.Notifications}>
            <h2>You have {props.notifications.length} massages!</h2>
            {
                messages()
            }
        </div>
    )
};

export default Notifications;
