import React from "react";
import style from "./DashBoard.module.scss";

import TaskManager from "../../../modules/TaskManager/TaskManager";
import PersonalFinance from "../../../modules/PersonalFinance/PersonalFinance";

interface IProps {
    moduleSelected: string,
    isCollapsed: boolean,
}

const DashBoard: React.FC<IProps> = (props) => {

    let isCollapsed = props.isCollapsed ? style.collapsed_true : style.collapsed_false;

    const Module: any = {
        TaskManager: <TaskManager />,
        PersonalFinance: <PersonalFinance />,
    };

    return (
        <div className={style.DashBoard + ` ${isCollapsed}`}>
            {
                (props.moduleSelected in Module) ?
                    Module[props.moduleSelected]
                    :
                    <div className={style.DashBoardWidgets}>
                        <TaskManager/>
                        <PersonalFinance/>
                    </div>
            }
        </div>
    )
};

export default DashBoard;
