import React from "react";
import style from "./Settings.module.scss";
import { FaCogs, FaMobile,FaShieldAlt } from "react-icons/fa";

interface IProps {
    selectController: any,
    settingsSelected: string | null,
    settingsController: any,
}

const Settings: React.FC<IProps> = (props) => {

    // Need to be put in a separate components!
    const settings:any = {
        General: (
            <div className={style.table}>
                <h4>General Settings:</h4>
            </div>
        ),
        Widgets: (
            <div className={style.table} style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                <h4>Widgets Settings:</h4>
                <div style={{width: "100%", textAlign: "center"}}>
                    <div>
                        <p style={{marginBottom: 0}}>DashBoard Settings:</p>
                        <div style={{border: "1px dashed black", height: "100px", paddingTop: "50px"}}>
                            ...Settings
                        </div>
                    </div>
                    <div>
                        <p style={{marginBottom: 0}}>TaskManager Settings:</p>
                        <div style={{border: "1px dashed black", height: "100px", paddingTop: "50px"}}>
                            ...Settings
                        </div>
                    </div>
                    <div>
                        <p style={{marginBottom: 0}}>PersonalFinance Settings:</p>
                        <div style={{border: "1px dashed black", height: "100px", paddingTop: "50px"}}>
                            ...Settings
                        </div>
                    </div>
                </div>
            </div>
        ),
        Security: (
            <div className={style.table} style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                <h4>Security Settings:</h4>
                <div style={{width: "100%", textAlign: "center"}}>
                    <div>
                        <p style={{marginBottom: 0}}>Change Login/Email:</p>
                        <div style={{border: "1px dashed black", height: "100px", paddingTop: "50px"}}>
                            ...Settings
                        </div>
                    </div>
                    <div>
                        <p style={{marginBottom: 0}}>Change Password:</p>
                        <div style={{border: "1px dashed black", height: "100px", paddingTop: "50px"}}>
                            ...Settings
                        </div>
                    </div>
                </div>
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
            <span className={style.btn}
                onClick={() => props.settingsController()}
            >
                Update
            </span>
        </div>
    )
};

export default Settings;
/*
<span className={style.btn}
                    onClick={() => props.userAccountController()}
            >
                Update
            </span>
*/