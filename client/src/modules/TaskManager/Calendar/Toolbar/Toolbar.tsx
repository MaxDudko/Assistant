import React from 'react';
import styles from './Toolbar.module.scss';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

interface IProps {
    currentDate: string,
    changeSelect: any,
    createCalendar: any,
    period: string,
    isCurrentMonth: boolean,
    moment: any,
    isMonth: boolean,
    date: any,
    calendar: any,
}

const Toolbar: React.FC<IProps> = (props) => {

    return (
        <div className={styles.Toolbar}>
            <button className={styles.btn} onClick={() => props.createCalendar('prev')}> <FaArrowCircleLeft/> </button>
            <h2>
                <button className={styles.btn}
                        onClick={() => {
                            props.createCalendar('');
                            if(!props.isMonth) props.calendar(!props.isMonth);
                        }}
                >
                    {
                        props.isMonth ?
                            <span>{props.moment.format('DD MMMM YYYY')}</span>
                            :
                            <span>{props.date}</span>
                    }
                </button>
            </h2>
            <button className={styles.btn} onClick={() => props.createCalendar('next')}> <FaArrowCircleRight/> </button>
        </div>
    )
};

export default Toolbar;