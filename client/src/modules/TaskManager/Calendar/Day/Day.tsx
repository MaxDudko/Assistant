import React, {Component} from 'react';
import styles from "./Day.module.scss";

interface IProps {
    createCalendar: any,
    data: any,
    currentDate: string,
    moment: string,
    calendar: string,
    tasks: object,
}

const Day: React.FC<IProps> = (props) => {
    const componentDidMount = () => {
        const calendar = props.calendar;
        props.createCalendar(calendar);
    };

    const renderThead = () => {
        const data = props.data;
        const currentDate = props.currentDate;

        const thead = data.map((day: any, i: number) => <td key={i}>{day.Day + ' ' + day.MonthNumber + '/' + day.Date}</td>);
        thead.unshift(<td />);
        const day = currentDate.split(' ').slice(1, 2);
        return <tr className={styles.thead}><td /><td>{day}</td></tr>;
    };

    const renderTable = () => {
        const data = props.data;
        const hours = [...Array(24).keys()].map((i) => i < 10 ? '0' + i + ':00' : i + ':00');

        const tdDays = hours.map((hour, i) => (
            <tr key={i}>
                {
                    data.map((day: any, i: number) => (
                        <td className={styles.td} key={i} >
                            {/*{this.props.tasks.map((task, i) => (*/}
                            {/*    day.yearMonthDay ===  task.date ?*/}
                            {/*        <Task date={task.date}*/}
                            {/*              time={task.time}*/}
                            {/*              caption={task.caption}*/}
                            {/*              key={i}*/}
                            {/*        />*/}
                            {/*        : null*/}
                            {/*))}*/}
                        </td>
                    ))
                }
                <td className={styles.hour}>{hour}</td>
                <td className={styles.td} />
            </tr>
        ));

        return tdDays;

    };


     return (
         <table className={styles.table}>
             <thead>
             {renderThead()}
             </thead>
             <tbody>
             {renderTable()}
             </tbody>
         </table>
        )
};

export default Day;