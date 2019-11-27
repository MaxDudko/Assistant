import React from "react";
import style from "./Settings.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from "@fortawesome/free-solid-svg-icons";

interface IProps {}

const Settings: React.FC<IProps> = (props) => {
    return (
        <div className={style.Settings}>
            <div className={style.list}>
                <b>Settings:</b>
                <p className={style.item}>General</p>
                <p className={style.item}>Widgets</p>
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
