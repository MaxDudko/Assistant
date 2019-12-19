import React, {useState} from "react";
import style from "./AddTask.module.scss";

interface IProps {

}

const AddTask: React.FC<IProps> = (props) => {
    let [isShow, show] = React.useState(false);
    return(
        <div className={style.AddTask}>
            <h4 className={style.btn}
                onClick={() => show(!isShow)}
            >
                Add New Task
            </h4>
            {
                isShow ?
                    <div className={style.form}>
                        <div className={style.row}>
                            <label>
                                Task Name:
                                <input type="text"
                                       placeholder="New Task"
                                />
                            </label>
                            <label>
                                Priority:
                                <input type="number"
                                />
                            </label>
                        </div>
                        <div className={style.row}>
                            <label>
                                Start:
                                <input type="datetime"
                                />
                            </label>
                            <label>
                                End:
                                <input type="datetime"
                                />
                            </label>
                        </div>
                        <div className={style.row}>
                            <label>
                                Description:
                                <textarea placeholder="description"
                                />
                            </label>
                        </div>
                        <div className={style.row}>
                            <span className={style.btn}>
                                Save
                            </span>
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    )
};

export default AddTask;
