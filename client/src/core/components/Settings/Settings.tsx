import React from "react";
import style from "./Settings.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faMobile,faShieldAlt } from "@fortawesome/free-solid-svg-icons";

interface IProps {}

const Settings: React.FC<IProps> = (props) => {
    return (
        <div className={style.Settings}>
            <div className={style.list}>
                <p>Settings:</p>
                <p className={style.item}>
                    <FontAwesomeIcon icon={faCogs} className={style.item_icon} />
                    General
                </p>
                <p className={style.item}>
                    <FontAwesomeIcon icon={faMobile} className={style.item_icon} />
                    Widgets
                </p>
                <p className={style.item}>
                    <FontAwesomeIcon icon={faShieldAlt} className={style.item_icon} />
                    Confidentiality
                </p>
            </div>
            <div className={style.body}>
                <FontAwesomeIcon icon={faCogs}
                                 style={{width: "50px", height: "50px"}}
                />
            </div>
        </div>
    )
};

export default Settings;
