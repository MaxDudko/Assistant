import React from "react";
import style from "./Navbar.module.scss";

interface IProps {

}

const Navbar: React.FC<IProps> = (props) => {
    return(
        <nav className={style.Navbar}>
            <div className={style.title}>
                Assistant
            </div>
            <div className={style.menu}>
                <div className={style.menu_item}>
                    Item_1
                </div>
                <div className={style.menu_item}>
                    Item_2
                </div>
                <div className={style.menu_item}>
                    Item_3
                </div>
                <div className={style.menu_item}>
                    Item_4
                </div>
            </div>
        </nav>
    )
};

export default Navbar;