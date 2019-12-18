import React from "react";
import moment from "moment";
import style from "./TaskManager.module.scss";
import Calendar from "./Calendar/Calendar";

import data from "../../assets/data";
import ToDoList from "./ToDoList/ToDoList";
import Category from "./Category/Category";
import AddTask from "./AddTask/AddTask";

interface IState {
    period: any,
    next: any,
    prev: any,
    moment: any,
    currentDate: string,
    isCurrentMonth: boolean,
    currentDay: string,
    data: any,
    categories: string[],
    selectedCategory: string,
    list: [],
    tasks: {},
    [key: string]: any,
}

class TaskManager extends React.Component<{}, IState>{
    state: IState = {
        period: 'month',
        next: 0,
        prev: 0,
        moment: moment(),
        currentDate: "",
        isCurrentMonth: true,
        currentDay: "",
        data: [],
        categories: [],
        selectedCategory: "All",
        list: [],
        tasks: data.tasks,
    };

    currentMonthCheck(page: string) {
        this.setState({
            isCurrentMonth: !this.state.isCurrentMonth
        })
    }


    componentDidMount() {
        this.createCalendar("");
        this.getCategories();
    }

    changeSelect(select: string) {
        this.setState({
            period: select,
            data: [],
        });
    }

    createCalendar(change: string) {
        const data = [];
        let prevDate;
        let nextDate;
        let currentDate;
        let currentDay;
        let select = this.state.period;
        let next = this.state.next;
        let prev = this.state.prev;

        if(change === 'prev') {
            prev++;
            next--;
            currentDate = moment().subtract(prev, select).format('DD MMMM YYYY');
            currentDay = moment().subtract(prev, select).format('dddd');
            prevDate = moment().subtract(prev, select).startOf(select).startOf('isoWeek');
            nextDate = moment().subtract(prev, select).endOf(select).endOf('isoWeek');
        } else if(change === 'next') {
            prev--;
            next++;
            currentDate = moment().add(next, select).format('DD MMMM YYYY');
            currentDay = moment().subtract(next, select).format('dddd');
            prevDate = moment().add(next, select).startOf(select).startOf('isoWeek');
            nextDate = moment().add(next, select).endOf(select).endOf('isoWeek');
        } else {
            prev = 0;
            next = 0;
            currentDate = moment().format('DD MMMM YYYY');
            currentDay = moment().format('dddd');
            prevDate = moment().startOf(select).startOf('isoWeek');
            nextDate = moment().endOf(select).endOf('isoWeek');
        }

        while (prevDate.isBefore(nextDate)) {
            data.push({
                Day: prevDate.format('dddd'),
                DayNumber: +prevDate.format('e') + 1,
                Date: prevDate.format('DD'),
                Month: prevDate.format('MMMM'),
                MonthNumber: prevDate.format('MM'),
                Year: prevDate.format('YYYY'),
                monthYear: prevDate.format('MMMM YYYY'),
                yearMonthDay: prevDate.format('YYYY-MM-DD')
            });
            prevDate.add(1, 'days');
        }

        this.setState({
            data: data,
            currentDate: currentDate,
            next: next,
            prev: prev
        })
    }

    getCategories() {
        let categories = Object.keys(this.state.tasks);
        this.setState({categories: categories})
    }

    selectCategory(category: string) {
        this.setState({
            selectedCategory: category
        })
    }

    setCategories(name: string) {
        let categories = [...this.state.categories, name];
        this.setState({categories: categories});

        // API: axios.post(...blablabla) || dispatch to App and axios.post(...blablabla)
    }

    deleteCategories(name: string) {
        let categoris = this.state.categories.filter(e => e !== name);
        this.setState({categories: categoris});

        // API: axios.post(...blablabla) || dispatch to App and axios.post(...blablabla)
    }

    // addTask(date: string, time: string, caption: string, description: string) {
    //     const data = this.state.tasks;
    //     const newTask = {
    //         date: date,
    //         time: time,
    //         caption: caption,
    //         description: description
    //     };
    //
    //     this.setState({
    //         tasks: Object.assign(data, newTask)
    //     })
    // }



    render() {
        return (
            <div className={style.TaskManager}>
                <div className={style.leftSide}>
                    <Category categories={this.state.categories}
                              setCategories={this.setCategories.bind(this)}
                              deleteCategories={this.deleteCategories.bind(this)}
                              selectCategories={this.selectCategory.bind(this)}
                    />
                    <ToDoList selectedCategory={this.state.selectedCategory}
                              tasks={this.state.tasks}
                    />
                    <AddTask/>
                </div>
                <div className={style.rightSide}>
                    <div>
                        <Calendar period={this.state.period}
                                  changeSelect={this.changeSelect.bind(this)}
                                  createCalendar={this.createCalendar.bind(this)}
                                  currentDate ={this.state.currentDate}
                                  isCurrentMonth={this.state.isCurrentMonth}
                                  data={this.state.data}
                                  moment={this.state.moment}
                                  tasks={this.state.tasks}
                                  currentMonthCheck={this.currentMonthCheck.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskManager;
