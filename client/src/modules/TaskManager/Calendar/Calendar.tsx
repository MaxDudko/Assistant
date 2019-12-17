import React from 'react';
import styles from './Calendar.module.scss';
import Month from './Month/Month';
import Week from './Week/Week';
import Day from './Day/Day';
import moment from "moment";
import data from "../../../assets/data";
//import List from './components/List';

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
}

const Calendar: React.FC<IProps> = (props) => {

    const renderCalendar = () => {
        const calendar = props.period;
        // props.createCalendar(calendar);
        if(calendar === 'month') {
            return <Month data={props.data}
                          currentDate ={props.currentDate}
                          createCalendar={props.createCalendar}
                          calendar={calendar}
                          tasks={props.tasks}
                          currentMonthCheck={props.currentMonthCheck}
            />
        } else if(calendar === 'week') {
            return <Week data={props.data}
                         currentDate ={props.currentDate}
                         createCalendar={props.createCalendar}
                         calendar={calendar}
                         tasks={props.tasks}
            />
        } else if(calendar === 'day') {
            return <Day data={props.data}
                        moment={props.moment}
                        currentDate ={props.currentDate}
                        createCalendar={props.createCalendar}
                        calendar={calendar}
                        tasks={props.tasks}
            />
        } /*else if(calendar === 'list') {
            return <List data={this.props.data}
                         currentDate ={this.props.currentDate}
                         createCalendar={this.props.createCalendar}
                         calendar={calendar}
                         addTask={this.props.addTask}
                         tasks={this.props.tasks}
            />
        }*/
    };

    return (
        <div className={styles.calendar}>
            {renderCalendar()}
        </div>
    )
};

export default Calendar;