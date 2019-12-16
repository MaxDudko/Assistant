import React from "react";
import moment from "moment";
import style from "./TaskManager.module.scss";
import { MdPlaylistAdd } from "react-icons/md";
import Toolbar from "./Calendar/Toolbar/Toolbar";
import Calendar from "./Calendar/Calendar";

import data from "../../assets/data";

interface IState {
    isLogin: boolean,
    page: string,
    period: string,
    next: number,
    prev: number,
    moment: any,
    data: object,
    tasks: object,
}

class TaskManager extends React.Component<{}, IState>{
    state: IState = {
        isLogin: true,
        page: 'calendar',
        period: 'month',
        next: 0,
        prev: 0,
        moment: moment(),
        data: [],
        tasks: data.tasks,
    };

    selectPage(page: string) {
        this.setState({
            page: page
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
        let select = this.state.period;
        let next = this.state.next;
        let prev = this.state.prev;

        if(change === 'prev') {
            prev++;
            next--;
            currentDate = moment().subtract(prev, select).format('DD MMMM YYYY');
            prevDate = moment().subtract(prev, select).startOf(select).startOf('week');
            nextDate = moment().subtract(prev, select).endOf(select).endOf('week');
        } else if(change === 'next') {
            prev--;
            next++;
            currentDate = moment().add(next, select).format('DD MMMM YYYY');
            prevDate = moment().add(next, select).startOf(select).startOf('week');
            nextDate = moment().add(next, select).endOf(select).endOf('week');
        } else {
            prev = 0;
            next = 0;
            currentDate = moment().format('DD MMMM YYYY');
            prevDate = moment().startOf(select).startOf('week');
            nextDate = moment().endOf(select).endOf('week');
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

    addTask(date, time, caption, description) {
        const data = this.state.tasks;
        const newTask = {
            date: date,
            time: time,
            caption: caption,
            description: description
        };
        data.push(newTask);

        this.setState({
            tasks: data
        })
    }

    render() {
        return (
            <div className={style.TaskManager}>
                <div className={style.leftSide}>
                    <div className={style.menu}>
                        <span className={style.title}>Category:</span>
                        <span className={style.categoryType}>All</span>
                        <span className={style.categoryType}>Life</span>
                        <span className={style.categoryType}>Work</span>
                        <span className={style.categoryType}>Other</span>
                        <span className={style.categoryAdd}>
                            <MdPlaylistAdd />
                        </span>
                    </div>
                    <div className={style.list}></div>
                </div>
                <div className={style.rightSide}>
                    <div>
                        <Toolbar period={this.state.period}
                                 changeSelect={this.changeSelect.bind(this)}
                                 createCalendar={this.createCalendar.bind(this)}
                                 currentDate ={this.state.currentDate}
                        />
                        <Calendar period={this.state.period}
                                  data={this.state.data}
                                  moment={this.state.moment}
                                  currentDate ={this.state.currentDate}
                                  createCalendar={this.createCalendar.bind(this)}
                                  addTask={this.addTask.bind(this)}
                                  tasks={this.state.tasks}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskManager;
