import React from "react";
import style from "./Navbar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCogs, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

interface IProps {
    isLogin: boolean,
    signOut: any,
    userName: string,
    notifications: number,
    avatar?: string,
    modalController: any
}

const Navbar: React.FC<IProps> = (props) => {
    return (
        <div className={style.Navbar}>
            <div className={style.item} onClick={() => props.modalController("Notifications")}>
                <FontAwesomeIcon icon={faBell}
                                 title="Notifications"
                />
                <span>{props.notifications}</span>
            </div>
            <div className={style.item} onClick={() => props.modalController("Settings")}>
                <FontAwesomeIcon icon={faCogs}
                                 title="Settings"
                />
            </div>
            <div className={style.item} onClick={() => props.modalController("UserAccount")}>
                {
                    props.avatar ?
                        <img src={props.avatar} alt={props.userName} title="User Account"/>
                        :
                        <FontAwesomeIcon icon={faUser}
                                         title="User Account"
                        />
                }
            </div>
            <div className={style.item} onClick={() => props.signOut()}>
                <FontAwesomeIcon icon={faSignOutAlt}
                                 title="Notifications"
                />
            </div>
        </div>
    )
};

export default Navbar;
