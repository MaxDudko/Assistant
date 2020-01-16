import React from "react";
import style from "./TaskManager.module.scss";

import Calendar from "./Calendar/Calendar";
import ToDoList from "./ToDoList/ToDoList";
import Category from "./Category/Category";

import {connect} from "react-redux";
import {IReduxState} from "../../store/reducers";
import {getCategories, getTasks, createCalendar} from "../../store/actions";

interface IState {}

interface IProps {
    id: string,
    tasks: any,
    categories: string[],
    selectedCategory: string,
    getCategories: any,
    createCalendar: any,

    calendar_data: any,
    currentDate: string,
    next: any,
    prev: any,
    moment: any
}

class TaskManager extends React.Component<IProps, IState>{

    componentDidMount() {
        this.props.createCalendar("");
        this.props.getCategories();
    }

    render() {
        return (
            <div className={style.TaskManager}>
                <div className={style.leftSide}>
                    <Category categories={this.props.categories}
                              selectedCategory={this.props.selectedCategory}
                    />
                    <ToDoList selectedCategory={this.props.selectedCategory}
                              tasks={this.props.tasks}
                              categories={this.props.categories}
                    />
                </div>
                <div className={style.rightSide}>
                    <Calendar createCalendar={this.props.createCalendar}
                              currentDate ={this.props.currentDate}
                              calendar_data={this.props.calendar_data}
                              moment={this.props.moment}
                              tasks={this.props.tasks}
                              categories={this.props.categories}
                              selectedCategory={this.props.selectedCategory}
                    />
                </div>
            </div>
        );
    }
}

export default connect((state: IReduxState) => {
    return {
        id: state.auth.id,
        tasks: state.tasks.tasks_data,
        categories: state.tasks.categories,
        selectedCategory: state.tasks.selectedCategory,

        // isCurrentMonth: state.calendar.isCurrentMonth,
        calendar_data: state.calendar.calendar_data,
        currentDate: state.calendar.currentDate,
        next: state.calendar.next,
        prev: state.calendar.prev,
        moment: state.calendar.moment,
    };
}, (dispatch) => {
    return {
        getTasks: (id: string) => dispatch(getTasks(id)),
        getCategories: () => dispatch(getCategories()),

        createCalendar: (change: string) => dispatch(createCalendar(change)),
    }
})(TaskManager)
