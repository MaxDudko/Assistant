import React from "react";
import style from "./Navbar.module.scss";
import { FaSignOutAlt, FaCogs, FaBell, FaUser } from "react-icons/fa";

interface IProps {
    isLogin: string | null,
    signOut: any,
    userName: string,
    notifications: number,
    avatar?: string,
    selectController: any
}

const Navbar: React.FC<IProps> = (props) => {
    return (
        <div className={style.Navbar}>
            <div className={style.item} onClick={() => props.selectController("modalSelected", "Notifications")}>
                <FaBell title="Notifications" />
                <span>{props.notifications}</span>
            </div>
            <div className={style.item} onClick={() => props.selectController("modalSelected", "Settings")}>
                <FaCogs title="Settings" />
            </div>
            <div className={style.item} onClick={() => props.selectController("modalSelected", "UserAccount")}>
                {
                    props.avatar ?
                        <img src={props.avatar} alt={props.userName} title="User Account"/>
                        :
                        <FaUser title="User Account" />
                }
            </div>
            <div className={style.item} onClick={() => props.signOut()}>
                <FaSignOutAlt title="Sign Out" />
            </div>
        </div>
    )
};

export default Navbar;
