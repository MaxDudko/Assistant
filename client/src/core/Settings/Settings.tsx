import React from "react";
import style from "./Settings.module.scss";
import { FaCogs, FaMobile,FaShieldAlt } from "react-icons/fa";

import General from "./General";
import Widgets from "./Widgets";
import Security from "./Security";
import {connect} from "react-redux";
import {IReduxState} from "../../store/reducers";

interface IProps {
    selectController: any,
    settingsSelected: string | null,
}

const Settings: React.FC<IProps> = (props) => {

    const settings:any = {
        General: <General/>,
        Widgets: <Widgets/>,
        Security: <Security/>,
    };

    return (
        <div className={style.Settings}>
            <div className={style.list}>
                <p>Settings:</p>
                <p className={style.item} onClick={() => props.selectController("settingsSelected", "General")}>
                    <FaCogs className={style.item_icon} />
                    General
                </p>
                <p className={style.item} onClick={() => props.selectController("settingsSelected", "Widgets")}>
                    <FaMobile className={style.item_icon} />
                    Widgets
                </p>
                <p className={style.item} onClick={() => props.selectController("settingsSelected", "Security")}>
                    <FaShieldAlt className={style.item_icon} />
                    Security
                </p>
            </div>
            <div className={style.body}>
                {
                    props.settingsSelected === null ?
                        <FaCogs style={{width: "50px", height: "50px"}} />
                        :
                        settings[props.settingsSelected]
                }
            </div>
            <span className={style.btn}
                onClick={() => alert("WTF???")}
            >
                Update
            </span>
        </div>
    )
};

export default connect((state: IReduxState) => {
    return {
        settingsSelected: state.common.settingsSelected,
    };
}, (dispatch) => {
    return {
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
})(Settings)

