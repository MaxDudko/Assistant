import React, {useState} from "react";
import style from "./AddTask.module.scss";

interface IProps {

}

const AddTask: React.FC<IProps> = (props) => {
    let [isShow, show] = React.useState(false);
    return(
        <div className={style.AddTask}>
            {
                isShow ?
                    <div className={style.NewTask}>
                        <div className={style.title}>
                            <label>
                                Title:
                                <input className={style.input}
                                       type="text"
                                       placeholder="Task Name"
                                       name="title"
                                />
                            </label>
                            <label className={style.stars}
                                style={{flexDirection: "row"}}
                            >
                                Priority:
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                            </label>
                        </div>
                        <div className={style.term}>
                            <label>
                                Date:
                                <input className={style.input}
                                       type="datetime-local"
                                       name="date"
                                />
                            </label>
                        </div>
                        <div className={style.description}>
                            <label>
                                Descriptions:
                                <textarea className={style.input}
                                          cols={10}
                                          placeholder="Task Description..."
                                          name="description"
                                />
                            </label>
                            <input style={{display: "none"}} value={Date.now()} />
                        </div>
                        <div className={style.menu}>
                            <span className={style.btn}
                            >
                                Save
                            </span>
                            <span className={style.btn}
                                  onClick={() => show(!isShow)}
                            >
                                Cancel
                            </span>
                        </div>
                    </div>
                    :
                    <h4 className={style.btn}
                        onClick={() => show(!isShow)}
                    >
                        Add New Task
                    </h4>
            }
        </div>
    )
};

export default AddTask;
