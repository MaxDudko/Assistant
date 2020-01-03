import React from "react";
import moment from "moment";
import style from "./TaskManager.module.scss";
import Calendar from "./Calendar/Calendar";

import data from "../../assets/data";
import ToDoList from "./ToDoList/ToDoList";
import Category from "./Category/Category";
import axios from "axios";
// import Popup from "../../core/components/Popup/Popup";

interface IState {
    period: any,
    next: any,
    prev: any,
    moment: any,
    currentDate: string,
    isCurrentMonth: boolean,
    data: any,
    categories: string[],
    selectedCategory: string,
    list: [],
    tasks: any,
    popupShow: boolean,
    popupData: any,

    [key: string]: any,
}

interface IProps {
    id: string,
}

class TaskManager extends React.Component<IProps, IState>{
    state: IState = {
        period: 'month',
        next: 0,
        prev: 0,
        moment: moment(),
        currentDate: "",
        isCurrentMonth: true,
        data: [],
        categories: [],
        selectedCategory: "All",
        list: [],
        // tasks: [],
        tasks: data.tasks,
        popupShow: false,
        popupData: {},
    };

    currentMonthCheck(page: string) {
        this.setState({
            isCurrentMonth: !this.state.isCurrentMonth
        })
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
        // this.getTasks(this.props.id);
        console.log(this.state.tasks)
    }
    componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any): void {
        // this.getTasks(this.props.id);
        this.getCategories();
    }

    componentDidMount() {
        this.createCalendar("");
        // if(this.props.id) this.getTasks(this.props.id);
        // this.getCategories();
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
        let select = this.state.period;
        let next = this.state.next;
        let prev = this.state.prev;

        if(change === 'prev') {
            prev++;
            next--;
            currentDate = moment().subtract(prev, select).format('DD MMMM YYYY');
            prevDate = moment().subtract(prev, select).startOf(select).startOf('isoWeek');
            nextDate = moment().subtract(prev, select).endOf(select).endOf('isoWeek');
        } else if(change === 'next') {
            prev--;
            next++;
            currentDate = moment().add(next, select).format('DD MMMM YYYY');
            prevDate = moment().add(next, select).startOf(select).startOf('isoWeek');
            nextDate = moment().add(next, select).endOf(select).endOf('isoWeek');
        } else {
            prev = 0;
            next = 0;
            currentDate = moment().format('DD MMMM YYYY');
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
        let categories: any = [];
        this.state.tasks.map((task: any, index: number) => {
            if(!categories.includes(task.category)) categories.push(task.category)
        });
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

    getTasks(id: string) {
        axios.post('http://localhost:4000/tasks/get/', {
            "id": id
        })
            .then((response) => {
                console.log('/tasks/get: ', response);
                this.setState({tasks: response.data})
            })
            .catch((error) => {
                console.log('/tasks/get: ', error)
            });
    }

    updateTask(index: number, data:{}) {

        console.log(index, data);

        let tasks = this.state.tasks;
        tasks[index] = data;
        this.setState({
            tasks: tasks
        });
            // API: axios.post(...blablabla) || dispatch to App and axios.post(...blablabla)
    }

    createTask(data: {}) {

        console.log(data);

        let tasks = this.state.tasks;
        tasks[tasks.length] = data;
        this.setState({
            tasks: tasks
        });

        axios.post('http://localhost:4000/tasks/create/', {
            "id": this.props.id,
            "task": data

        })
            .then((response) => {
                console.log('/profile/get: ', response);
            })
            .catch((error) => {
                console.log('/profile/get: ', error)
            });
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
                              selectedCategory={this.state.selectedCategory}
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
                                  categories={this.state.categories}
                                  selectedCategory={this.state.selectedCategory}
                        />
                </div>
            </div>
        );
    }
}

export default TaskManager;
