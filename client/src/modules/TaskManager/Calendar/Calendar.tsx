import React from 'react';
import styles from './Calendar.module.scss';
import Toolbar from "./Toolbar/Toolbar";
import Month from './Month/Month';
import Day from './Day/Day';

interface IProps {
    period: string,
    data: any,
    tasks: any,
    currentDate: string,
    createCalendar: any,
    moment: string,
    // calendar: string,
    addTask: any,
    currentMonthCheck: any,
    changeSelect: any,
    isCurrentMonth: boolean,
    // calendar: string
}

const Calendar: React.FC<IProps> = (props) => {

    const renderCalendar = () => {

    };

    return (
        <div className={styles.calendar}>
            <Toolbar period={props.period}
                     changeSelect={props.changeSelect}
                     createCalendar={props.createCalendar}
                     currentDate ={props.currentDate}
                     isCurrentMonth={props.isCurrentMonth}
            />
            <Month period={props.period}
                      data={props.data}
                      moment={props.moment}
                      currentDate ={props.currentDate}
                      createCalendar={props.createCalendar}
                      tasks={props.tasks}
                      currentMonthCheck={props.currentMonthCheck}
                   // calendar={props.calendar}
            />
        </div>
    )
};

export default Calendar;