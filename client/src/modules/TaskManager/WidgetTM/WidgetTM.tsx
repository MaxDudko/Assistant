import React, {useState} from "react";
import style from "./WidgetTM.module.scss";
import {FaTasks} from "react-icons/fa";

import Calendar from "../Calendar/Calendar";
import Category from "../Category/Category";
import Task from "../Task/Task";

import data from "./../../../assets/data";
import {connect} from "react-redux";
import {IReduxState} from "../../../store/reducers";
import AddTask from "../AddTask/AddTask";

interface IProps {
    tasks: any,
    categories: any,
    selectedCategory: string,
}

const WidgetTM: React.FC<IProps> = (props) => {

    return(
        <div className={style.Widget}>
            <h1>
                <FaTasks style={{marginRight: "20px"}}/>
                 Task Manager
            </h1>
            <div className={style.list}>
                {/*<Category selectedCategory={props.selectedCategory}*/}
                {/*          categories={props.categories}*/}
                {/*/>*/}
                <AddTask selectedCategory={props.selectedCategory}
                         categories={props.categories}
                />
                {
                    props.categories.map((category:any, i:number) => {
                        return [
                            props.tasks.map((task: any, i: number) => {
                                return [
                                    <Task key={i}
                                          task_id={task._id}
                                          index={i}
                                          category={category}
                                          categories={props.categories}
                                          title={task.title}
                                          priority={task.priority}
                                          created={task.created}
                                          date={task.date}
                                          description={task.description}
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

export default connect((state: IReduxState) => {
    return {
        tasks: state.tasks.tasks_data,
        categories: state.tasks.categories,
        selectedCategory: state.tasks.selectedCategory,
    };
}, (dispatch) => {
    return {

    }
})(WidgetTM)
