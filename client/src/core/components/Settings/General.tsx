import React from "react";
import style from "./Settings.module.scss";

interface IProps {
}

const General: React.FC<IProps> = (props) => {
    return(
        <div className={style.table}>
            <h4>General Settings:</h4>
            <div className={style.tableBody}>
                <div>
                    <p className={style.optionsTitle}>Change Language:</p>
                    <div className={style.optionsBody}>
                        ...Settings
                    </div>
                </div>
                <div>
                    <p className={style.optionsTitle}>Change Theme:</p>
                    <div className={style.optionsBody}>
                        ...Settings
                    </div>
                </div>
                <div>
                    <p className={style.optionsTitle}>Notifications Settings:</p>
                    <div className={style.optionsBody}>
                        ...Settings
                    </div>
                </div>
            </div>
        </div>
    )
};

export default General;
