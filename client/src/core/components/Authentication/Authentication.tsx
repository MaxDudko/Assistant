import React from "react";
import style from "./Authentication.module.scss";

interface IProps {}

const Authentication: React.FC<IProps> = (props) => {
    return (
        <div className={style.Authentication}>
            Authentication
        </div>
    )
};

export default Authentication;
