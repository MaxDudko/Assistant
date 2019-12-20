import React from "react";
import style from "./ToDoList.module.scss";
import Task from "./Task/Task";
import AddTask from "../AddTask/AddTask";

interface IProps {
    selectedCategory: string,
    tasks: any,
    categories: string[],
    changeTask: any,
}

const ToDoList: React.FC<IProps> = (props) => {

    return(
        <div className={style.ToDoList}>
            <h4 className={style.category}>{props.selectedCategory}</h4>
            {/*<div className={style.menu}>*/}
            {/*    <span className={style.btn}></span>*/}
            {/*</div>*/}
            {
                props.selectedCategory === "All" ?
                    props.categories.map((category:any, i:number) => {
                        return [
                            props.tasks[category].map((task: any, i: number) => {
                                return[
                                    <Task key={i}
                                          index={i}
                                          category={category}
                                          title={task.title}
                                          priority={task.priority}
                                          created={task.created}
                                          date={task.date}
                                          description={task.description}
                                          changeTask={props.changeTask}
                                    />
                                ]
                            })
                        ]
                    })
                    :
                    props.tasks[props.selectedCategory].map((task: any, i: number) => {
                        return[
                            <Task key={i}
                                  index={i}
                                  category={props.selectedCategory}
                                  title={task.title}
                                  priority={task.priority}
                                  created={task.created}
                                  date={task.date}
                                  description={task.description}
                                  changeTask={props.changeTask}
                            />
                        ]
                    })
            }

            <AddTask/>
        </div>
    )
};

export default ToDoList;
