import React from "react";
import style from "./Settings.module.scss";
import { FaCogs, FaMobile,FaShieldAlt } from "react-icons/fa";

interface IProps {
    selectController: any,
    settingsSelected: string | null,
}

const Settings: React.FC<IProps> = (props) => {

    // Need to be put in a separate component!
    const settings:any = {
        General: (
            <div className={style.table}>
                <h4>General Settings:</h4>
            </div>
        ),
        Widgets: (
            <div className={style.table}>
                <h4>Widgets Settings:</h4>
            </div>
        ),
        Security: (
            <div className={style.table}>
                <h4>Security Settings:</h4>
            </div>
        ),
    };

    return (
        <div className={style.Settings}>
            <div className={style.list}>
                <p>Settings:</p>
                <p className={style.item} onClick={() => props.selectController("settingsSelected", "General")}>
                    <FaCogs className={style.item_icon} />
                    General
                </p>
                <p className={style.item} onClick={() => props.selectController("settingsSelected", "Widgets")}>
                    <FaMobile className={style.item_icon} />
                    Widgets
                </p>
                <p className={style.item} onClick={() => props.selectController("settingsSelected", "Security")}>
                    <FaShieldAlt className={style.item_icon} />
                    Security
                </p>
            </div>
            <div className={style.body}>
                {
                    props.settingsSelected === null ?
                        <FaCogs style={{width: "50px", height: "50px"}} />
                        :
                        settings[props.settingsSelected]
                }
            </div>
        </div>
    )
};

export default Settings;
