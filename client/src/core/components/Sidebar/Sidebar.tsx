import React from "react";
import style from "./Sidebar.module.scss";

interface IProps {}

const Sidebar: React.FC<IProps> = (props) => {
    return (
        <div className={style.Sidebar}>
            Sidebar
        </div>
    )
};

export default Sidebar;
