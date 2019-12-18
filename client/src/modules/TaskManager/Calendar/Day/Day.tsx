import React from "react";
import style from "./Day.module.scss";

interface IProps {

}

const Day: React.FC<IProps> = (props) => {
    return(
        <div className={style.AddTask}>
            Day
        </div>
    )
};

export default Day;
