import React from 'react';
import styles from './Toolbar.module.scss';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import {MdFullscreen, MdFullscreenExit} from "react-icons/md";
import {connect} from "react-redux";
import {IReduxState} from "../../../../store/reducers";
import {createCalendar, getCategories, getTasks} from "../../../../store/actions";
import {TaskManagerView_CHANGE} from "../../../../store/actions/common";

interface IProps {
    currentDate: string,
    createCalendar: any,
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
                    <button className={styles.btn} onClick={() => props.createCalendar('prev')}>
                        <FaArrowCircleLeft />
                    </button>
                    :
                    null
            }
            <b className={styles.middle_btn}>
                <button className={styles.btn}
                        onClick={() => {
                            props.createCalendar('');
                            if(!props.isMonth) props.calendar(!props.isMonth);
                        }}
                >
                    {
                        props.isMonth ?
                            <span className={props.moment.format("DD MMMM YYYY") === props.currentDate ? styles.current : ""}>
                                {props.currentDate.split(" ").splice(1).join(" ")}
                            </span>
                            :
                            <span className={props.moment.format("DD MMMM YYYY") === props.date ? styles.current : ""}>
                                {props.date}
                            </span>
                    }
                </button>
            </b>
            {
                props.isMonth ?
                    <button className={styles.btn} onClick={() => props.createCalendar('next')}>
                        <FaArrowCircleRight />
                    </button>
                    :
                    null
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
        // TaskManagerView_CHANGE: (view: string) => dispatch(TaskManagerView_CHANGE(view)),
    }
})(Toolbar)