import React from 'react';
import styles from './Calendar.module.scss';

import Toolbar from "./Toolbar/Toolbar";
import Month from './Month/Month';
import Day from './Day/Day';

import {connect} from "react-redux";
import {IReduxState} from "../../../store/reducers";

interface IProps {
    calendar_data: any,
    currentDate: string,
    createCalendar: any,
    moment: string,
    categories: any,
    selectedCategory: string,
    TaskManagerView: string,
}

const Calendar: React.FC<IProps> = (props) => {
    let [isMonth, change] = React.useState(true);
    let [date, setDate] = React.useState(props.currentDate);

    return (
        <div className={props.TaskManagerView === "Calendar" ? styles.fullCalendar : styles.calendar}>
            <Toolbar createCalendar={props.createCalendar}
                     currentDate ={props.currentDate}
                     moment={props.moment}
                     isMonth={isMonth}
                     date={date}
                     calendar={change.bind(Calendar)}
            />
            {
                isMonth ?
                    <Month calendar_data={props.calendar_data}
                           moment={props.moment}
                           currentDate ={props.currentDate}
                           createCalendar={props.createCalendar}
                           categories={props.categories}
                           selectedCategory={props.selectedCategory}
                           setDate={setDate.bind(Calendar)}
                           calendar={change.bind(Calendar)}
                           isMonth={isMonth}
                    />
                    :
                    <Day selectedCategory={props.selectedCategory}
                         categories={props.categories}
                         date={date}
                    />
            }
        </div>
    )
};

export default connect((state: IReduxState) => {
    return {
        TaskManagerView: state.common.TaskManagerView,
    };
}, (dispatch) => {
    return {

    }
})(Calendar)