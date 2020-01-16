import React from "react";
import style from "./Navbar.module.scss";
import { FaSignOutAlt, FaCogs, FaBell, FaUser } from "react-icons/fa";
import {connect} from "react-redux";
import {IReduxState} from "../../store/reducers";

interface IProps {
    authController: any,
    userName: string,
    noteLength: number,
    avatar?: string,
    selectController: any
}

const Navbar: React.FC<IProps> = (props) => {
    return (
        <div className={style.Navbar}>
            <div className={style.item} onClick={() => props.selectController("modalSelected", "Notifications")}>
                <FaBell title="Notifications" />
                <span>{props.noteLength}</span>
            </div>
            <div className={style.item} onClick={() => props.selectController("modalSelected", "Settings")}>
                <FaCogs title="Settings" />
            </div>
            <div className={style.item} onClick={() => props.selectController("modalSelected", "UserAccount")}>
                {
                    props.avatar ?
                        <img src={props.avatar} alt={props.userName} title="User Account"/>
                        :
                        <FaUser title="User Account" />
                }
            </div>
            <div className={style.item} onClick={() => props.authController()}>
                <FaSignOutAlt title="Sign Out" />
            </div>
        </div>
    )
};

export default connect((state: IReduxState) => {
    return {
        noteLength: state.notifications.notifications_data.length,
        avatar: state.profile.profile_data.avatar,
        userName: state.profile.profile_data.userName,
    };
}, (dispatch) => {
    return {
        // authController(form: string, data: {[key: string]: string}) {
        //     dispatch({
        //         type: "AUTH_CONTROLLER",
        //         payload: {
        //             form: form,
        //             data: data
        //         }
        //     })
        // },
        selectController(key: string, name: string) {
            dispatch({
                type: "SELECT_CONTROLLER",
                payload: {
                    key: key,
                    name: name
                }
            })
        }
    }
})(Navbar)
