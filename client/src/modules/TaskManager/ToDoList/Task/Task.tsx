import React from "react";
import style from "./Task.module.scss";

interface IProps {

}

const Task: React.FC<IProps> = (props) => {
    return(
        <div className={style.Task}>
            <h4>Task XXX</h4>
            <div className={style.description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
};

export default Task;