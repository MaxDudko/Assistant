import React, {Component} from 'react';
import styles from './Toolbar.module.scss';

interface IProps {
    currentDate: string,
    changeSelect: any,
    createCalendar: any,
    period: string,
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
            <div className={styles.Toolbar_left}>
                <button onClick={() => props.createCalendar('prev')}> ◀ </button>
                <button onClick={() => props.createCalendar('next')}> ▶ </button>
                <button onClick={() => props.createCalendar('')}>today</button>
            </div>
            <h2>{renderTitle()}</h2>
            <div className={styles.Toolbar_right}>
                <button onClick={() => click('month')}>month</button>
                <button onClick={() => click('week')}>week</button>
                <button onClick={() => click('day')}>day</button>
            </div>
        </div>
    )
};

export default Toolbar;