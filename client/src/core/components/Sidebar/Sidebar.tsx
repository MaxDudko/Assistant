import React from "react";
import style from "./Sidebar.module.scss";
import logo from "./../../../assets/img/mern.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";



interface IProps {
    isCollapsed: boolean,
    collapsed: any,
    SidebarItems: any
}

const Sidebar: React.FC<IProps> = (props) => {
    let isCollapsed = props.isCollapsed ? style.collapsed_true : style.collapsed_false;
    return (
        <div className={`${style.Sidebar} ${isCollapsed}`}>
            <div className={style.header}>
                <img src={logo} alt="#"
                     className={style.logo}
                />
                <span className={style.title}>Assistant</span>
                <FontAwesomeIcon icon={faBars}
                                 className={style.collapsed_icon}
                                 onClick={() => props.collapsed()}
                />
            </div>
            <div className={style.list}>
                {
                    props.SidebarItems.map((item: any, index: number) => {
                        let i = 'icon';
                        let icon = item[i];
                        let name = item.name;
                        return (
                            <p className={style.item} key={index}>
                                <FontAwesomeIcon icon={icon === "faPlus" ? faPlus : faCheck}
                                                 className={style.item_icon}
                                                 title={name}
                                />
                                <span className={style.item_name}>{name}</span>
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Sidebar;
