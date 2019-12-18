import React from 'react';
import styles from './Week.module.scss';

interface IProps {
    data: any,
    createCalendar: any,
    calendar: any,
    currentDate: string,
    tasks: object,
}

const Week: React.FC<IProps> = (props) => {

    const componentDidMount = () => {
        const calendar = props.calendar;
        props.createCalendar(calendar);
    };

    const renderThead = () => {
        const data = props.data;
        const currentDate = props.currentDate;

        const thead = data.map((day: any, i: number) => <td key={i}>{day.Day + ' ' + day.MonthNumber + '/' + day.Date}</td>);
        thead.unshift(<td />);
        return <tr className={styles.thead}>{thead}</tr>;
    };

    const renderTable = () => {
        const data = props.data;
        const currentDate = props.currentDate;
        const hours = [...Array(24).keys()].map((i) => i < 10 ? '0' + i + ':00' : i + ':00');

        const decorateStyles = (td: any) => {
            const decorate = styles.decorate;
            if(td.monthYear === currentDate) return decorate;
        };

        const tdDays = hours.map((hour, i) => (
            <tr key={i}>
                <td className={styles.td} key={i+'0'} >{hour}</td>
                {
                    data.map((day: any, i: number) => (
                        <td className={styles.td} key={1000*i} >
                            {/*{*/}
                            {/*    this.props.tasks.map((task, i) => (*/}
                            {/*    day.yearMonthDay ===  task.date && hour ===  task.time ?*/}
                            {/*        <Task date={task.date}*/}
                            {/*              time={task.time}*/}
                            {/*              caption={task.caption}*/}
                            {/*              key={i}*/}
                            {/*        />*/}
                            {/*        : null*/}
                            {/*    ))*/}
                            {/*}*/}
                        </td>
                    ))
                }
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

export default Week;

/*<table className={styles.table}>
                <thead>
                    {this.renderThead()}
                </thead>
                <tbody>
                  {this.renderTbody()} 
                </tbody>
              </table>*/

/*
<tr className={styles.thead}>{thead}</tr>;
*/