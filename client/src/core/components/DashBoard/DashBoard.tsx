import React from "react";
import style from "./DashBoard.module.scss";

interface IProps {
    WidgetSelected: string,
    isCollapsed: boolean,
}

const DashBoard: React.FC<IProps> = (props) => {
    let isCollapsed = props.isCollapsed ? style.collapsed_true : style.collapsed_false;
    return (
        <div className={style.DashBoard + ` ${isCollapsed}`}>
            {props.WidgetSelected}
        </div>
    )
};

export default DashBoard;
