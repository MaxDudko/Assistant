import React from "react";
import style from "./Footer.module.scss";

interface IProps {}

const Footer: React.FC<IProps> = (props) => {
    return (
        <div className={style.Footer}>
            Footer
        </div>
    )
};

export default Footer;
