import React from "react";
import style from "./AddTask.module.scss";
import {IoMdStar} from "react-icons/io";
import {connect} from "react-redux";
import {IReduxState} from "../../../store/reducers";

import {createTask} from "../../../store/actions/tasks";

interface IProps {
    id: string,
    createTask: any,
    selectedCategory: string,
    categories: string[],
}

const AddTask: React.FC<IProps> = (props) => {
    let [isShow, show] = React.useState(false);
    let [priority, priorityChange] = React.useState(0);
    let [title, titleChange] = React.useState("");
    let [date, dateChange] = React.useState("");
    let [description, descriptionChange] = React.useState("");
    let [created, createdChange] = React.useState(Date.now);
    let [category, categoryChange] = React.useState(props.categories[0]);

    const onChangeHandler = (e: any) => {
        categoryChange(e.target.value)
    };
    const setPriority = () => {
        let stars = [<span style={{fontSize: "12px"}} key={ Math.random()}>Priority: </span>];
        for(let i = 1; i <= 5; i++) {
            i <= priority ?
                stars.push(
                    <IoMdStar key={i + Math.random()}
                              style={{color: "gold"}}
                              onClick={() => {
                                  priorityChange(i);
                              }}
                    />
                )
                :
                stars.push(
                    <IoMdStar key={i + Math.random()}
                              style={{color: "gray"}}
                              onClick={() =>{
                                  priorityChange(i);
                              }}
                    />
                )
        }
        return stars;
    };

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
                                       onChange={(e) => titleChange(e.target.value)}
                                />
                            </label>
                            <span className={style.stars}>
                                {
                                    setPriority()
                                }
                            </span>
                        </div>
                        <div className={style.term}>
                            <label>
                                Category:
                                <select onChange={(e) => categoryChange(e.target.value)}>
                                    {
                                        props.categories.map((val, i) => (
                                            <option value={val} key={i + Math.random()}>
                                                {val}
                                            </option>
                                        ))
                                    }
                                </select>
                            </label>
                            <label>
                                Date:
                                <input className={style.input}
                                       type="datetime-local"
                                       name="date"
                                       onChange={(e) => dateChange(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className={style.description}>
                            <label>
                                Description:
                                <textarea className={style.input}
                                          cols={10}
                                          placeholder="Task Description..."
                                          name="description"
                                          onChange={(e) => descriptionChange(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className={style.menu}>
                            <span className={style.btn}
                                  onClick={() => show(!isShow)}
                            >
                                Cancel
                            </span>
                            <span className={style.btn}
                                  onClick={() => {
                                      props.createTask({
                                          title: title,
                                          category: category,
                                          priority: priority,
                                          date: date,
                                          description: description,
                                          created: created,
                                      },
                                          props.id,
                                      );
                                      show(!isShow);
                                  }}
                            >
                                Save
                            </span>
                        </div>
                    </div>
                    :
                    <b className={style.btnAddTask}
                        onClick={() => show(!isShow)}
                    >
                        Add New Task
                    </b>
            }
        </div>
    )
};

export default connect((state: IReduxState) => {
    return {
        id: state.auth.id,
    };
}, (dispatch) => {
    return {
        createTask: (data: {[key: string]: string}, id: string) => dispatch(createTask(data, id)),
    }
})(AddTask)