import React, {useEffect} from "react";
import style from "./ToDoList.module.scss";

import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask";
import {connect} from "react-redux";
import {IReduxState} from "../../../store/reducers";
import {createTask, getCategories} from "../../../store/actions";

interface IProps {
    selectedCategory: string,
    tasks: any,
    categories: string[],
    getCategories: any,
}

const ToDoList: React.FC<IProps> = (props) => {
    useEffect(() => {
        props.getCategories();
    }, [props.tasks]);

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
                                  task_id={task._id}
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
                                      task_id={task._id}
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

export default connect((state: IReduxState) => {
    return {
        tasks: state.tasks.tasks_data,
    };
}, (dispatch) => {
    return {
        getCategories: () => dispatch(getCategories()),
    }
})(ToDoList)