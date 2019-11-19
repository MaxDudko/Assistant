import React from "react";
import style from "./DashBoard.module.scss";

interface IProps {}

const DashBoard: React.FC<IProps> = (props) => {
    return (
        <div className={style.DashBoard}>
            DashBoard
        </div>
    )
};

export default DashBoard;
