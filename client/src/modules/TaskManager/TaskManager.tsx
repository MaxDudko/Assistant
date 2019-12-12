import React from "react";
import style from "./TaskManager.module.scss";
import {FaTasks} from "react-icons/fa";

interface iState {}

class TaskManager extends React.Component<{}, iState>{
    render() {
        return (
            <div className={style.TaskManager}>
                <h1>Task Manager</h1>
                <div style={{display: "flex", justifyContent: "center", paddingBottom: "20px"}}>
                    <FaTasks style={{fontSize: "100px", color: "blue"}}/>
                </div>
            </div>
        );
    }
}

export default TaskManager;
