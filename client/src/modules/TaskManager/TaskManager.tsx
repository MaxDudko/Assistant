import React from "react";
import style from "./TaskManager.module.scss";

import Calendar from "./Calendar/Calendar";
import ToDoList from "./ToDoList/ToDoList";
import Category from "./Category/Category";

import {connect} from "react-redux";
import {IReduxState} from "../../store/reducers";
import {getCategories, getTasks, createCalendar} from "../../store/actions";
import {TaskManagerView_CHANGE} from "../../store/actions/common";

interface IState {}

interface IProps {
    id: string,
    categories: string[],
    selectedCategory: string,
    getCategories: any,
    createCalendar: any,

    calendar_data: any,
    currentDate: string,
    next: any,
    prev: any,
    moment: any,

    TaskManagerView: string,
}

class TaskManager extends React.Component<IProps, IState>{

    componentDidMount() {
        this.props.createCalendar("");
    }

    render() {
        return (
            <div className={style.TaskManager}>
                {
                    this.props.TaskManagerView === "view_1" ?
                        <div className={style.wrapper}>
                            <div className={style.TaskList}>
                                <Category categories={this.props.categories}
                                          selectedCategory={this.props.selectedCategory}
                                />
                                <ToDoList selectedCategory={this.props.selectedCategory}
                                          categories={this.props.categories}
                                />
                            </div>
                            <Calendar createCalendar={this.props.createCalendar}
                                      currentDate ={this.props.currentDate}
                                      calendar_data={this.props.calendar_data}
                                      moment={this.props.moment}
                                      categories={this.props.categories}
                                      selectedCategory={this.props.selectedCategory}
                            />
                        </div>
                        :
                        <div className={style.wrapper}>
                            <div className={style.TaskList}>
                                <Category categories={this.props.categories}
                                          selectedCategory={this.props.selectedCategory}
                                />
                                <ToDoList selectedCategory={this.props.selectedCategory}
                                          categories={this.props.categories}
                                />
                            </div>
                            <Calendar createCalendar={this.props.createCalendar}
                                      currentDate ={this.props.currentDate}
                                      calendar_data={this.props.calendar_data}
                                      moment={this.props.moment}
                                      categories={this.props.categories}
                                      selectedCategory={this.props.selectedCategory}
                            />
                        </div>
                }
            </div>
        );
    }
}

export default connect((state: IReduxState) => {
    return {
        id: state.auth.id,
        categories: state.tasks.categories,
        selectedCategory: state.tasks.selectedCategory,

        calendar_data: state.calendar.calendar_data,
        currentDate: state.calendar.currentDate,
        next: state.calendar.next,
        prev: state.calendar.prev,
        moment: state.calendar.moment,

        TaskManagerView: state.common.TaskManagerView,
    };
}, (dispatch) => {
    return {
        getTasks: (id: string) => dispatch(getTasks(id)),
        getCategories: () => dispatch(getCategories()),

        createCalendar: (change: string) => dispatch(createCalendar(change)),
    }
})(TaskManager)
