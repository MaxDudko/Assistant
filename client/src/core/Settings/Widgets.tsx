import React from "react";
import style from "./Settings.module.scss";

interface IProps {
}

const Widgets: React.FC<IProps> = (props) => {
    return(
        <div className={style.table}>
            <h4>Widgets Settings:</h4>
            <div className={style.tableBody}>
                <div>
                    <p className={style.optionsTitle}>DashBoard Settings:</p>
                    <div className={style.optionsBody}>
                        ...Settings
                    </div>
                </div>
                <div>
                    <p className={style.optionsTitle}>TaskManager Settings:</p>
                    <div className={style.optionsBody}>
                        ...Settings
                    </div>
                </div>
                <div>
                    <p className={style.optionsTitle}>AgileKanban Settings:</p>
                    <div className={style.optionsBody}>
                        ...Settings
                    </div>
                </div>
                <div>
                    <p className={style.optionsTitle}>PersonalFinance Settings:</p>
                    <div className={style.optionsBody}>
                        ...Settings
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Widgets;
