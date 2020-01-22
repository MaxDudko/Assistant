import React from "react";
import style from "./Navbar.module.scss";
import {FaSignOutAlt, FaCogs, FaBell, FaUser, FaTasks} from "react-icons/fa";

import {connect} from "react-redux";
import {IReduxState} from "../../store/reducers";
import Sidebar from "../Sidebar/Sidebar";
import {MdDashboard, MdMonetizationOn} from "react-icons/md";
import {GoProject} from "react-icons/go";
import {collapseSidebar, selectController} from "../../store/actions";

interface IProps {
    authController: any,
    userName: string,
    noteLength: number,
    avatar?: string,
    selectController: any
    SidebarItems: any,
    moduleSelected: string,
    modalSelected: string | null,
}

const Navbar: React.FC<IProps> = (props) => {
    return (
        <div className={style.Navbar}>
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
            <div className={style.items}>
                <div className={`${style.item} ${props.modalSelected === "Notifications" ? style.selected : ""}`} onClick={() => props.selectController("modalSelected", "Notifications")}>
                    <FaBell title="Notifications" />
                    <span>{props.noteLength}</span>
                </div>
                <div className={`${style.item} ${props.modalSelected === "Settings" ? style.selected : ""}`} onClick={() => props.selectController("modalSelected", "Settings")}>
                    <FaCogs title="Settings" />
                </div>
                <div className={`${style.item} ${props.modalSelected === "UserAccount" ? style.selected : ""}`} onClick={() => props.selectController("modalSelected", "UserAccount")}>
                    {
                        props.avatar ?
                            <img className={style.avatar}
                                 src={props.avatar}
                                 alt={props.userName}
                                 title="User Account"
                            />
                            :
                            <FaUser title="User Account" />
                    }
                </div>
                <div className={style.item} onClick={() => props.authController()}>
                    <FaSignOutAlt className={style.span} title="Sign Out" />
                </div>
            </div>
        </div>
    )
};

export default connect((state: IReduxState) => {
    return {
        noteLength: state.notifications.notifications_data.length,
        avatar: state.profile.profile_data.avatar,
        userName: state.profile.profile_data.userName,
        isCollapsedSidebar: state.common.isCollapsedSidebar,
        moduleSelected: state.common.moduleSelected,
        modalSelected: state.common.modalSelected,
    };
}, (dispatch) => {
    return {
        collapseSidebar: () => dispatch(collapseSidebar()),
        selectController: (key: string, name: string) => dispatch(selectController(key, name))
    }
})(Navbar)
