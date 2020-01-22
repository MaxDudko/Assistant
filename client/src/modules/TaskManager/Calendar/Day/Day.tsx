import React from "react";
import style from "./Day.module.scss";
import moment from "moment";
import {connect} from "react-redux";
import {IReduxState} from "../../../../store/reducers";

interface IProps {
    tasks: any,
    selectedCategory: string,
    categories: any,
    date: any,
}

const Day: React.FC<IProps> = (props) => {
    return(
        <div className={style.Day}>
            <table className={style.table}>
                <tbody>
                {
                    [...Array(24).keys()].map((e: any, i: number) => {
                        return(
                            <tr key={i}>
                                <td className={style.td}
                                    key={i+Math.random()}
                                >
                                    {`${e < 10 ? '0'+e : e}:00`}
                                </td>
                                <td className={style.td}
                                    key={i+Math.random()}
                                >
                                    {
                                        props.selectedCategory === "All" ?
                                            props.tasks.map((task: any, i: number) => {
                                                if(
                                                    moment(task.date).format('DD MMMM YYYY') === props.date
                                                    &&
                                                    task.date.split("T")[1].split(":")[0] === `${e < 10 ? '0'+e : e.toString()}`
                                                ) return(
                                                    <span key={i} className={style.task}
                                                          title={task.description}
                                                    >
                                                        <span>{task.title}</span>
                                                        <span>{task.date.split("T")[1]}</span>
                                                    </span>
                                                )
                                            })
                                            :
                                            props.tasks.map((task: any, i: number) => {
                                                if(
                                                    moment(task.date).format('DD MMMM YYYY') === props.date
                                                    &&
                                                    task.date.split("T")[1].split(":")[0] === `${e < 10 ? '0'+e : e.toString()}`
                                                    &&
                                                    task.category === props.selectedCategory
                                                ) return(
                                                    <span key={i} className={style.task}
                                                          title={task.description}
                                                    >
                                                        <span>{task.title}</span>
                                                        <span>{task.date.split("T")[1]}</span>
                                                    </span>
                                                )
                                            })
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
};

export default connect((state: IReduxState) => {
    return {
        tasks: state.tasks.tasks_data,
    };
}, (dispatch) => {
    return {

    }
})(Day)