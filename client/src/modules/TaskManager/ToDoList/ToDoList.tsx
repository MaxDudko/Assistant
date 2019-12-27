import React from "react";
import style from "./ToDoList.module.scss";
import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask";

interface IProps {
    selectedCategory: string,
    tasks: any,
    categories: string[],
    updateTask: any,
    createTask: any,
}

const ToDoList: React.FC<IProps> = (props) => {

    return(
        <div className={style.ToDoList}>
            <AddTask createTask={props.createTask}
                     selectedCategory={props.selectedCategory}
                     categories={props.categories}
            />
            {
                props.selectedCategory === "All" ?
                    props.categories.map((category:any) => {
                        if(!props.tasks[category]) return null;
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
                                          updateTask={props.updateTask}
                                    />
                                ]
                            })
                        ]
                    })
                    :
                    props.tasks[props.selectedCategory] ?
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
                                      updateTask={props.updateTask}
                                />
                                ]
                        })
                        :
                        null
            }

        </div>
    )
};

export default ToDoList;
