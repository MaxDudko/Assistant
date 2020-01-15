import React from 'react';
import styles from './Toolbar.module.scss';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

interface IProps {
    currentDate: string,
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
            {
                props.isMonth ?
                    <button className={styles.btn} onClick={() => props.createCalendar('prev')}> <FaArrowCircleLeft/> </button>
                    :
                    null
            }
            <h2>
                <button className={styles.btn}
                        onClick={() => {
                            props.createCalendar('');
                            if(!props.isMonth) props.calendar(!props.isMonth);
                        }}
                >
                    {
                        props.isMonth ?
                            // <span>{props.moment.format('DD MMMM YYYY')}</span>
                            <span>{props.currentDate.split(" ").splice(1).join(" ")}</span>
                            :
                            <span>{props.date}</span>
                    }
                </button>
            </h2>
            {
                props.isMonth ?
                    <button className={styles.btn} onClick={() => props.createCalendar('next')}> <FaArrowCircleRight/> </button>
                    :
                    null
            }
        </div>
    )
};

export default Toolbar;