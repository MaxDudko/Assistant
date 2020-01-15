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
    currentMonthCheck: any,
    isCurrentMonth: boolean,
    categories: string[],
    selectedCategory: string,
}

const Calendar: React.FC<IProps> = (props) => {
    let [isMonth, change] = React.useState(true);
    let [date, setDate] = React.useState(props.currentDate);

    return (
        <div className={styles.calendar}>
            <Toolbar period={props.period}
                     createCalendar={props.createCalendar}
                     currentDate ={props.currentDate}
                     isCurrentMonth={props.isCurrentMonth}
                     moment={props.moment}
                     isMonth={isMonth}
                     date={date}
                     calendar={change.bind(Calendar)}
            />
            {
                isMonth ?
                    <Month period={props.period}
                           data={props.data}
                           moment={props.moment}
                           currentDate ={props.currentDate}
                           createCalendar={props.createCalendar}
                           tasks={props.tasks}
                           currentMonthCheck={props.currentMonthCheck}
                           categories={props.categories}
                           selectedCategory={props.selectedCategory}
                           setDate={setDate.bind(Calendar)}
                           calendar={change.bind(Calendar)}
                           isMonth={isMonth}
                    />
                    :
                    <Day tasks={props.tasks}
                         selectedCategory={props.selectedCategory}
                         categories={props.categories}
                         date={date}
                    />
            }
        </div>
    )
};

export default Calendar;