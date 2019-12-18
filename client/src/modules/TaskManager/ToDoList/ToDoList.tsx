import React from "react";
import style from "./ToDoList.module.scss";
import Task from "./Task/Task";

interface IProps {

}

const ToDoList: React.FC<IProps> = (props) => {
    return(
        <div className={style.ToDoList}>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </div>
    )
};

export default ToDoList;
