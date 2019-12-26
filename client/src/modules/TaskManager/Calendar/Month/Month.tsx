import React from 'react';
import style from './Month.module.scss';
import moment from 'moment';
import Task from "../../Task/Task";
// import Task from '../Task/Task';

interface IProps {
    createCalendar: any,
    data: any,
    currentDate: string,
    // calendar: string,
    tasks: any,
    currentMonthCheck: any,
    period: string,
    moment: any,
    categories: string[],
    selectedCategory: string,
}

const Month: React.FC<IProps> = (props) => {


    // const componentDidMount = () => {
    //     const calendar = props.calendar;
    //     props.createCalendar(calendar);
    // };

    const renderThead = () => {
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thurthday', 'Friday', 'Saturday', 'Sunday'];
        const thead = daysOfWeek.map((day, index) => <td key={index}>{day}</td>);
        return <tr className={style.thead}>{thead}</tr>;
    };
     
    const renderTbody = () => {
        // const calendar = props.calendar;
        // props.createCalendar(calendar);
        const data = props.data;
        const currentDate = props.currentDate;

        const decorateStyles = (td: any) => {
           const decorate = style.decorate;
           const decorateDate = style.decorateDate;
           let tdClass = null;
           if(td.Month === currentDate.split(" ")[1] && `${td.Date} ${td.Month} ${td.Year}` === moment().format('DD MMMM YYYY')) {
               tdClass = decorate + " " + decorateDate;
               // props.currentMonthCheck()
           } else if (td.Month === currentDate.split(" ")[1]) {
               tdClass = decorate;
           }
           return tdClass;
        };

        const tdDays = data.map((td: any, i: number) => (
            <td className={style.td + ' ' + decorateStyles(td)} key={i}>
                <a href="/">{td.Date}</a>
                {
                    props.selectedCategory === "All" ?
                        props.categories.map((category:any) => {
                            if(!props.tasks[category]) return null;
                            return [
                                props.tasks[category].map((task: any, i: number) => {
                                    if(moment(task.date).format('DD MMMM YYYY') === `${td.Date} ${td.Month} ${td.Year}`) return(
                                        <span key={i} className={style.task}>
                                            <span>{task.title}</span>
                                            <span>{task.date.split("T")[1]}</span>
                                        </span>
                                    )
                                })
                            ]
                        })
                        :
                        props.tasks[props.selectedCategory] ?
                            props.tasks[props.selectedCategory].map((task: any, i: number) => {
                                if(moment(task.date).format('DD MMMM YYYY') === `${td.Date} ${td.Month} ${td.Year}`) return(
                                    <span key={i} style={{color: "red"}}>
                                        {task.title}
                                        {task.date.split("T")[1]}
                                    </span>
                                )
                            })
                            :
                            null
                }
            </td>
        ));
        
        const week = 7;
        const tr = [];
        for (let i = 0; i < Math.ceil(tdDays.length/week); i++) {
            tr[i] = tdDays.slice((i*week), (i*week) + week);
        }
        const tbody = tr.map((tr, index) => <tr key={index}>{tr}</tr>);
        return tbody;
    };

   
        return (
            <table className={style.table}>
            <thead>
                {renderThead()}
            </thead>
            <tbody>
                {renderTbody()}
            </tbody>
          </table>
        )

};

export default Month;

/*
const data = this.props.data;
        const daysBefore = this.props.daysBefore;
        const daysAfter = this.props.daysAfter;
        const tdArray = [];
        const td = <td className={styles.td} />;
        for(let i = 0; i < daysBefore; i++) {
            tdArray.push(td);
        }
        const tdDays = data.map((td, i) => (
            <td className={styles.td} key={i}>
                <a href="/">{td.Date}</a>
            </td>
        ));
        tdArray.push(tdDays);
        for(let i = 0; i < daysAfter; i++) {
            tdArray.push(td);
        }
        const week = 7;
        const tr = [];
        for (let i = 0; i < Math.ceil(tdArray.length/week); i++) {
            tr[i] = tdArray.slice((i*week), (i*week) + week);
        }
        const tbody = tr.map((tr, index) => <tr key={index}>{tr}</tr>);
        console.log(tr);
        return tbody;
*/