import React from "react";
import style from "./AddTask.module.scss";
import {IoMdStar} from "react-icons/io";

import {connect} from "react-redux";
import {IReduxState} from "../../../store/reducers";
import {createTask, getCategories} from "../../../store/actions";
import {MdPlaylistAdd} from "react-icons/all";

interface IProps {
    id: string,
    createTask: any,
    selectedCategory: string,
    categories: string[],
    getCategories: any,
}

const AddTask: React.FC<IProps> = (props) => {
    let [isShow, show] = React.useState(false);
    let [priority, priorityChange] = React.useState(0);
    let [title, titleChange] = React.useState("");
    let [date, dateChange] = React.useState("");
    let [description, descriptionChange] = React.useState("");
    let [created, createdChange] = React.useState(Date.now);
    let [category, categoryChange] = React.useState(props.categories[0]);

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
                                <input list="select" name="select" onChange={(e) => categoryChange(e.target.value)} />
                                <datalist id="select">
                                    {
                                        props.categories.map((val, i) => (
                                            <option value={val} key={i + Math.random()}>
                                                {val}
                                            </option>
                                        ))
                                    }
                                </datalist>
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
                                      props.getCategories();
                                      show(!isShow);
                                  }}
                            >
                                Create
                            </span>
                        </div>
                    </div>
                    :
                    <b className={style.btnAddTask}
                        onClick={() => show(!isShow)}
                    >
                        <MdPlaylistAdd style={{fontSize: "30px"}} />
                        Create New Task
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
        createTask: (data: any, id: string) => dispatch(createTask(data, id)),
        getCategories: () => dispatch(getCategories())
    }
})(AddTask)