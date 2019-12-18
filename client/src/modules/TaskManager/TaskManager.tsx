import React from "react";
import moment from "moment";
import style from "./TaskManager.module.scss";
import Calendar from "./Calendar/Calendar";

import data from "../../assets/data";
import ToDoList from "./ToDoList/ToDoList";
import Category from "./Category/Category";
import AddTask from "./AddTask/AddTask";

interface IState {
    isLogin: boolean,
    page: string,
    period: any,
    next: any,
    prev: any,
    moment: any,
    currentDate: string,
    isCurrentMonth: boolean,
    currentDay: string,
    data: any,
    tasks: [],
    [key: string]: any
}

class TaskManager extends React.Component<{}, IState>{
    state: IState = {
        isLogin: true,
        page: 'calendar',
        period: 'month',
        next: 0,
        prev: 0,
        moment: moment(),
        currentDate: "",
        isCurrentMonth: true,
        currentDay: "",
        data: [],
        tasks: data.tasks,
    };

    currentMonthCheck(page: string) {
        this.setState({
            isCurrentMonth: !this.state.isCurrentMonth
        })
    }
    // renderContent() {
    //     const page = this.state.page;
    //     if (page === "calendar") {
    //         return(
    //             <div>
    //                 <Toolbar period={this.state.period}
    //                          changeSelect={this.changeSelect.bind(this)}
    //                          createCalendar={this.createCalendar.bind(this)}
    //                          currentDate ={this.state.currentDate}
    //                 />
    //                 <Calendar period={this.state.period}
    //                           data={this.state.data}
    //                           moment={this.state.moment}
    //                           currentDate ={this.state.currentDate}
    //                           createCalendar={this.createCalendar.bind(this)}
    //                           addTask={this.addTask.bind(this)}
    //                           tasks={this.state.tasks}
    //                 />
    //             </div>
    //         )
    //     } else if (page === 'taskList') {
    //         return(
    //             <TaskList data={this.props.data}
    //                       currentDate ={this.props.currentDate}
    //                       createCalendar={this.props.createCalendar}
    //                       calendar={this.props.period}
    //                       addTask={this.addTask.bind(this)}
    //                       tasks={this.state.tasks}
    //             />
    //         )
    //
    //     }
    // }

    componentDidMount() {
        this.createCalendar("");
    }

    changeSelect(select: string) {
        this.setState({
            period: select,
            data: [],
        });
        //this.createCalendar(null, select);
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
        /*
                const hoursPerDay = 24;
                const time = [];
                let formattedTime;
                for(let i = 0; i <= hoursPerDay; i++) {
                    formattedTime = moment().subtract(i, "hours").format("hA");
                    time.unshift(formattedTime);
                }
        */


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

    addTask(date: string, time: string, caption: string, description: string) {
        const data = this.state.tasks;
        const newTask = {
            date: date,
            time: time,
            caption: caption,
            description: description
        };
        // data.push(newTask);

        this.setState({
            tasks: Object.assign(data, newTask)
        })
    }

    render() {
        return (
            <div className={style.TaskManager}>
                <div className={style.leftSide}>
                    <Category/>
                    <ToDoList/>
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
                                  addTask={this.addTask.bind(this)}
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
