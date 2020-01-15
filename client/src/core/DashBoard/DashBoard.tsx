import React from "react";
import style from "./DashBoard.module.scss";

import TaskManager from "../../modules/TaskManager/TaskManager";
import WidgetTM from "../../modules/TaskManager/WidgetTM/WidgetTM";
import PersonalFinance from "../../modules/PersonalFinance/PersonalFinance";
import AgileKanban from "../../modules/AgileKanban/AgileKanban";
import {connect} from "react-redux";
import {IReduxState} from "../../store/reducers";

interface IProps {
    moduleSelected: string,
    isCollapsedSidebar: boolean,
}

const DashBoard: React.FC<IProps> = (props) => {

    let isCollapsed = props.isCollapsedSidebar ? style.collapsed_true : style.collapsed_false;

    const Module: any = {
        TaskManager: <TaskManager />,
        PersonalFinance: <PersonalFinance />,
        AgileKanban: <AgileKanban />,
    };



    return (
        <div className={style.DashBoard + ` ${isCollapsed}`}>
            {
                (props.moduleSelected in Module) ?
                    Module[props.moduleSelected]
                    :
                    <div className={style.DashBoardWidgets}>
                        <WidgetTM />
                        {/*<TaskManager />*/}
                        <AgileKanban/>
                        <PersonalFinance/>
                    </div>
            }
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

    }
})(DashBoard)
