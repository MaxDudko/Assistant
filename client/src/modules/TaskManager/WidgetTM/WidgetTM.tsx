import React, {useState} from "react";
import style from "./WidgetTM.module.scss";
import {FaTasks} from "react-icons/fa";
import Calendar from "../Calendar/Calendar";
import data from "./../../../assets/data";
import Task from "../ToDoList/Task/Task";
import Category from "../Category/Category";

interface IProps {

}

const WidgetTM: React.FC<IProps> = (props) => {
    let [tasks, setTasks] = React.useState(data.tasks);
    let [categories, setCategories] = React.useState(Object.keys(tasks));
    let [currentDate] = React.useState(Date.now);
    let [isGetAll] = React.useState(false);

    return(
        <div className={style.Widget}>
            <h1>
                <FaTasks style={{marginRight: "20px"}}/>
                 Task Manager
            </h1>
            <div className={style.list}>
                {
                    categories.map((category:any, i:number) => {
                        return [
                            tasks[category].map((task: any, i: number) => {
                                return[
                                    <Task key={i}
                                          index={i}
                                          category={category}
                                          title={task.title}
                                          priority={task.priority}
                                          created={task.created}
                                          date={task.date}
                                          description={task.description}
                                          changeTask={null}
                                    />
                                ]
                            })
                        ]
                    })
                }
            </div>
        </div>
    )
};

export default WidgetTM;

