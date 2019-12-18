import React from "react";
import style from "./ToDoList.module.scss";
import Task from "./Task/Task";

interface IProps {
    selectedCategory: string,
    tasks: {},
}

const ToDoList: React.FC<IProps> = (props) => {
    return(
        <div className={style.ToDoList}>
            <h4>{props.selectedCategory}</h4>
            {/*{*/}
            {/*    props.tasks[props.selectedCategory].map((el: {}, i: number) => {*/}

            {/*    })*/}
            {/*}*/}
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </div>
    )
};

export default ToDoList;
