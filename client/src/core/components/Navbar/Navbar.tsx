import React from "react";
import style from "./Navbar.module.scss";
import avatar from  "../../../assets/img/mern.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCogs, faBell } from "@fortawesome/free-solid-svg-icons";

interface IProps {
    isLogin: boolean,
    userName: string,
}

const Navbar: React.FC<IProps> = (props) => {
    return (
        <div className={style.Navbar}>
            <FontAwesomeIcon icon={faBell}
                             className={style.item}
                             title="Notifications"
            />
            <FontAwesomeIcon icon={faCogs}
                             className={style.item}
                             title="Settings"
            />
            <FontAwesomeIcon icon={faSignOutAlt}
                             className={style.item}
                             title="SignOut"
            />
        </div>
    )
};

export default Navbar;
