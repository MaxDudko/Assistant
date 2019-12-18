import React from "react";
import style from "./Settings.module.scss";

interface IProps {
}

const Security: React.FC<IProps> = (props) => {
    return(
        <div className={style.table}>
            <h4>General Settings:</h4>
            <div className={style.tableBody}>
                <div>
                    <p className={style.optionsTitle}>Change Email/Login:</p>
                    <div className={style.optionsBody}>
                        ...Settings
                    </div>
                </div>
                <div>
                    <p className={style.optionsTitle}>Change Password:</p>
                    <div className={style.optionsBody}>
                        ...Settings
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Security;
