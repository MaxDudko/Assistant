import React from "react";
import style from "./Sidebar.module.scss";
import logo from "../../assets/img/mern.png";
import { FaBars, FaTasks } from "react-icons/fa";
import { MdDashboard, MdMonetizationOn } from "react-icons/md";
import { GoProject } from "react-icons/go";

import {connect} from "react-redux";
import {IReduxState} from "../../store/reducers";
import {collapseSidebar, selectController} from "../../store/actions";

interface IProps {
    isCollapsedSidebar: boolean,
    collapseSidebar: any,
    SidebarItems: any,
    selectController: any,
    moduleSelected: string,
}

const Sidebar: React.FC<IProps> = (props) => {

    let isCollapsed = props.isCollapsedSidebar ? style.collapsed_true : style.collapsed_false;

    return (
        <div className={`${style.Sidebar} ${isCollapsed}`}>
            {/*<div className={style.header}>*/}
            {/*    <img src={logo} alt="#"*/}
            {/*         className={style.logo}*/}
            {/*    />*/}
            {/*    <span className={style.title}*/}
            {/*          onClick={() => props.selectController('modalSelected', null)}*/}
            {/*    >*/}
            {/*        Assistant*/}
            {/*    </span>*/}
            {/*    <FaBars className={style.collapsed_icon}*/}
            {/*            onClick={() => props.collapseSidebar()}*/}
            {/*    />*/}
            {/*</div>*/}
            <div className={style.list}>
                {
                    props.SidebarItems.map((item: any, index: number) => {
                        let icon = item.icon;
                        let name = item.name;
                        let module = item.module;

                        const IconCollection: any = {
                            MdDashboard: <MdDashboard className={style.item_icon} title={name} />,
                            FaTasks: <FaTasks className={style.item_icon} title={name} />,
                            GoProject: <GoProject className={style.item_icon} title={name} />,
                            MdMonetizationOn: <MdMonetizationOn className={style.item_icon} title={name} />,
                        };

                        return (
                            <p className={`${style.item} ${props.moduleSelected === item.module ? style.selected : ""}`} key={index}
                               onClick={() => props.selectController("moduleSelected", module)}
                            >

                                {IconCollection[icon]}
                                <span className={style.item_name}>{name}</span>
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default connect((state: IReduxState) => {
    return {
        isCollapsedSidebar: state.common.isCollapsedSidebar,
        moduleSelected: state.common.moduleSelected,
    };
}, (dispatch) => {
    return {
        collapseSidebar: () => dispatch(collapseSidebar()),
        selectController: (key: string, name: string) => dispatch(selectController(key, name))
    }
})(Sidebar)

