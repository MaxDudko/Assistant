import React from "react";
import style from "./Notifications.module.scss";
import {AiOutlineClose} from "react-icons/ai";

import {connect} from "react-redux";
import {IReduxState} from "../../store/reducers";
import {deleteMessage} from "../../store/actions";

interface IProps {
    notifications: {[key: string]: string}[],
    deleteMessage: any,
}

const Notifications: React.FC<IProps> = (props) => {

    const messages = () => {
        return [props.notifications.map((message: any, index: number) => (
                <div className={style.message} key={index}>
                    <div className={style.head}>
                        <b className={style.title}>
                            <span className={style.id}>#{message.id}</span>
                            {message.title}
                            <span className={style.menu}>
                                <AiOutlineClose className={style.btn} onClick={() => props.deleteMessage(message.id)} />
                            </span>
                        </b>
                        <span className={style.subtitle}>from: <a href="/#">{message.from}</a></span>
                        <span className={style.subtitle}>{message.date}</span>
                    </div>
                    <div className={style.body}>
                        <p>
                            {message.text}
                        </p>
                    </div>
                </div>
            )
        )]
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

export default connect((state: IReduxState) => {
    return {
        notifications: state.notifications.notifications_data,
    };
}, (dispatch) => {
    return {
        deleteMessage: (id: string) => dispatch(deleteMessage(id)),
    }
})(Notifications)