import React from "react";
import style from "./Sidebar.module.scss";

interface IProps {

}

const Sidebar: React.FC<IProps> = (props) => {
    return (
        <div className={style.Sidebar}>
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
        </div>
    )
};

export default Sidebar;