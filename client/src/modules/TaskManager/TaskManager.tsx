import React from "react";
import moment from "moment";
import style from "./TaskManager.module.scss";
import Calendar from "./Calendar/Calendar";

import data from "../../assets/data";
import ToDoList from "./ToDoList/ToDoList";
import Category from "./Category/Category";
import AddTask from "./AddTask/AddTask";
import axios from "axios";
import Popup from "../../core/components/Popup/Popup";

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
    tasks: any,
    // categoryTasks: [],
    popupShow: boolean,
    popupData: any,

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
        popupShow: false,
        popupData: {},
        // categoryTasks: [],
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

    getTasks() {
        let category = this.state.selectedCategory;

        let tasks = this.state.tasks[category];
    }

    updateTask(category: string, index: number, data:{}) {
        // if(!key) {
        //     axios.post('http://localhost:4000/profile/update/', {
        //         "user": {
        //             "id": this.state.id,
        //             "profile": {
        //                 ...this.state.profile
        //             }
        //         }
        //     })
        //         .then((response) => {
        //             console.log('/profile/update: ', response);
        //         })
        //         .catch((error) => {
        //             console.log('/profile/update: ', error)
        //         });
        // }
        // let edit = this.state.tasks[this.state.selectedCategory][index];
        // edit[name] = value;

        console.log(category, index, data);
        // let category = this.state.selectedCategory;
        let tasks = this.state.tasks;
        tasks[category][index] = data;
        this.setState({
            tasks: {
                ...this.state.tasks,
                tasks
            }
        });
            // API: axios.post(...blablabla) || dispatch to App and axios.post(...blablabla)
    }

    createTask(category: string, data:{}) {
        console.log(category, data);
        let tasks = this.state.tasks;
        tasks[category][tasks[category].length] = data;
        console.log(category, tasks);
        this.setState({
            tasks: {
                ...this.state.tasks,
                tasks
            }
        })
    }

    showPopup(data: {}) {
        console.log(data);
        data ?
            this.setState({
                popupShow: !this.state.popupShow,
            })
            :
            this.setState({
                popupShow: !this.state.popupShow,
                popupData: data
            })


    }

    render() {
        return (
            <div className={style.TaskManager}>
                <div className={style.leftSide}>
                    <Category categories={this.state.categories}
                              setCategories={this.setCategories.bind(this)}
                              deleteCategories={this.deleteCategories.bind(this)}
                              selectCategories={this.selectCategory.bind(this)}
                              showPopup={this.showPopup.bind(this)}
                    />
                    <ToDoList selectedCategory={this.state.selectedCategory}
                              tasks={this.state.tasks}
                              categories={this.state.categories}
                              updateTask={this.updateTask.bind(this)}
                              createTask={this.createTask.bind(this)}
                    />
                </div>
                <div className={style.rightSide}>
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
                {
                    this.state.popupShow ?
                        <Popup data={this.state.popupData}/>
                        :
                        null
                }
            </div>
        );
    }
}

export default TaskManager;
