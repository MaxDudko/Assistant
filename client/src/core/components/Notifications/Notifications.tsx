import React from "react";
import style from "./Notifications.module.scss";
import {AiOutlineClose} from "react-icons/ai";

interface IProps {
    notifications: any,
    notificationsController: any,
}

const Notifications: React.FC<IProps> = (props) => {
    let [isCollapsed, collapsed] = React.useState(false);

    const messages = () => {
        let list = props.notifications.map((m: any, i: number) => (
                <div className={style.message} key={i}>
                    <div className={style.head}>
                        <b className={style.title}>
                            <span className={style.id}>#{m.id}</span>
                            {m.title}
                            <span className={style.menu}>
                                <AiOutlineClose className={style.btn} onClick={() => props.notificationsController(m.id)} />
                            </span>
                        </b>
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
