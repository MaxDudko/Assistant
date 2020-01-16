import React from "react";
import style from "./ToDoList.module.scss";

import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask";

interface IProps {
    selectedCategory: string,
    tasks: any,
    categories: string[],
}

const ToDoList: React.FC<IProps> = (props) => {

    return(
        <div className={style.ToDoList}>
            <AddTask
                     selectedCategory={props.selectedCategory}
                     categories={props.categories}
            />
            {
                props.selectedCategory === "All" ?
                    props.tasks.map((task: any, i: number) => {
                        return[
                            <Task key={i}
                                  index={i}
                                  category={task.category}
                                  categories={props.categories}
                                  title={task.title}
                                  priority={task.priority}
                                  created={task.created}
                                  date={task.date}
                                  description={task.description}
                            />
                            ]
                    })
                    :
                    props.tasks.map((task: any, i: number) => {
                            if(task.category === props.selectedCategory) return[
                                <Task key={i}
                                      index={i}
                                      category={task.category}
                                      categories={props.categories}
                                      title={task.title}
                                      priority={task.priority}
                                      created={task.created}
                                      date={task.date}
                                      description={task.description}
                                />
                            ]
                    })

            }

        </div>
    )
};

export default ToDoList;
