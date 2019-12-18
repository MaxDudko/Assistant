import React from 'react';
import styles from './Toolbar.module.scss';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import moment from "moment";

interface IProps {
    currentDate: string,
    changeSelect: any,
    createCalendar: any,
    period: string,
    isCurrentMonth: boolean,
}

const Toolbar: React.FC<IProps> = (props) => {
    const renderTitle = () => {
        let period = props.period;
        if(period === 'month') {
            return props.currentDate;
        } else if(period === 'week') {
            return props.currentDate;
        } else if(period === 'day') {
            return props.currentDate;
        }
    };
    const click = (period: string) => {
        props.changeSelect(period);
        props.createCalendar(period);
    };

    return (
        <div className={styles.Toolbar}>
            {/*<div className={styles.Toolbar_left}>*/}
                <button className={styles.btn} onClick={() => props.createCalendar('prev')}> <FaArrowCircleLeft/> </button>
                <h2>
                    {
                        props.currentDate === moment().format('DD MMMM YYYY') ?
                            <button className={styles.btn}>{props.currentDate}</button>
                            :
                            <button className={styles.btn} onClick={() => props.createCalendar('')}> to Current Month </button>
                    }
                </h2>
                <button className={styles.btn} onClick={() => props.createCalendar('next')}> <FaArrowCircleRight/> </button>
                {/*<button onClick={() => props.createCalendar('')}>today</button>*/}
            {/*</div>*/}
            {/*<h2>{renderTitle()}</h2>*/}
            {/*<div className={styles.Toolbar_right}>*/}
            {/*    <button onClick={() => click('month')}>month</button>*/}
            {/*    <button onClick={() => click('week')}>week</button>*/}
            {/*    <button onClick={() => click('day')}>day</button>*/}
            {/*</div>*/}
        </div>
    )
};

export default Toolbar;