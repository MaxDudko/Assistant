import React from 'react';
import style from './Month.module.scss';
import moment from 'moment';
import {connect} from "react-redux";
import {IReduxState} from "../../../../store/reducers";

interface IProps {
    createCalendar: any,
    calendar_data: any,
    currentDate: string,
    tasks: any,
    moment: any,
    categories: string[],
    selectedCategory: string,
    setDate: any,
    calendar: any,
    isMonth: boolean,
}

const Month: React.FC<IProps> = (props) => {

    const renderThead = () => {
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thurthday', 'Friday', 'Saturday', 'Sunday'];
        const thead = daysOfWeek.map((day, index) => <td key={index}>{day}</td>);
        return <tr className={style.thead}>{thead}</tr>;
    };
     
    const renderTbody = () => {
        const data = props.calendar_data;
        const currentDate = props.currentDate;

        const decorateStyles = (td: any) => {
           const decorate = style.decorate;
           const decorateDate = style.decorateDate;
           let tdClass = null;
           if(td.Month === currentDate.split(" ")[1] && `${td.Date} ${td.Month} ${td.Year}` === moment().format('DD MMMM YYYY')) {
               tdClass = decorate + " " + decorateDate;
           } else if (td.Month === currentDate.split(" ")[1]) {
               tdClass = decorate;
           }
           return tdClass;
        };

        const tdDays = data.map((td: any, i: number) => (
            <td className={style.td + ' ' + decorateStyles(td)}
                key={i}
                onClick={() => {
                    props.calendar(!props.isMonth);
                    props.setDate(`${td.Date} ${td.Month} ${td.Year}`)
                }}
            >
                <a href="/">{td.Date}</a>
                {
                    props.selectedCategory === "All" ?
                        props.tasks.map((task: any, i: number) => {
                            if(moment(task.date).format('DD MMMM YYYY') === `${td.Date} ${td.Month} ${td.Year}`) return(
                                <span key={i} className={style.task}
                                      title={task.description}
                                >
                                    <span>{task.title}</span>
                                    <span>{task.date.split("T")[1]}</span>
                                </span>
                            )
                        })
                        :
                        props.tasks.map((task: any, i: number) => {
                                if(
                                    moment(task.date).format('DD MMMM YYYY') === `${td.Date} ${td.Month} ${td.Year}`
                                    &&
                                    task.category === props.selectedCategory
                                ) return(
                                    <span key={i} className={style.task}
                                          title={task.description}
                                    >
                                        <span>{task.title}</span>
                                        <span>{task.date.split("T")[1]}</span>
                                    </span>
                                )
                            })
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

export default connect((state: IReduxState) => {
    return {
        tasks: state.tasks.tasks_data,
    };
}, (dispatch) => {
    return {

    }
})(Month)