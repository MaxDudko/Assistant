import React from "react";
import style from "./TaskManager.module.scss";

interface iState {}

class TaskManager extends React.Component<{}, iState>{
    render() {
        return (
            <div className={style.TaskManager}>
                <h1>Task Manager</h1>
            </div>
        );
    }
}

export default TaskManager;
