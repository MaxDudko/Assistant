import React from "react";
import style from "./Navbar.module.scss";

interface IProps {}

const Navbar: React.FC<IProps> = (props) => {
    return (
        <div className={style.Navbar}>
            Navbar
        </div>
    )
};

export default Navbar;
