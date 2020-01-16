import React from "react";
import style from "./Task.module.scss";
import {IoMdStar} from "react-icons/io";
import {connect} from "react-redux";
import {IReduxState} from "../../../store/reducers";

import {updateTask} from "../../../store/actions/tasks";
import {deleteTask} from "../../../store/actions/tasks";
import {getCategories} from "../../../store/actions/tasks";
interface IProps {
    id: string,
    title: string,
    priority: number,
    created: string,
    date: string,
    description: string,
    index: number,
    category: string,
    categories: string[],

    updateTask: any,
    deleteTask: any,
    getCategories: any,
}

const Task: React.FC<IProps> = (props) => {
    let [show, edit] = React.useState(false);
    let [priority, priorityChange] = React.useState(props.priority);
    let [title, titleChange] = React.useState(props.title);
    let [date, dateChange] = React.useState(props.date);
    let [description, descriptionChange] = React.useState(props.description);
    let [created] = React.useState(props.created);
    // let [category] = React.useState(props.category);
    let [category, categoryChange] = React.useState(props.categories[0]);

    const getPriority = () => {
        let stars = [];
        for(let i = 1; i <= 5; i++) {
            i <= priority ?
                stars.push(
                    <IoMdStar key={i}
                              style={{color: "gold"}}
                    />
                )
                :
                stars.push(
                    <IoMdStar key={i}
                              style={{color: "gray"}}
                    />
                )
        }
        return stars;
    };

    const setPriority = () => {
        let stars = [<span style={{fontSize: "12px"}} key={ Math.random()}>Priority: </span>];
        for(let i = 1; i <= 5; i++) {
            i <= priority ?
                stars.push(
                    <IoMdStar key={i}
                              style={{color: "gold"}}
                              onClick={() => {
                                  priorityChange(i);
                                  // props.updateTask(props.index, props.category, "priority", priority)
                              }}
                    />
                )
                :
                stars.push(
                    <IoMdStar key={i}
                              style={{color: "gray"}}
                              onClick={() =>{
                                  priorityChange(i);
                                  // props.updateTask(props.index, props.category, "priority", priority)
                              }}
                    />
                )
        }
        return stars;
    };

    return(
        <div className={style.Task}>
            <div className={style.title}>
                {
                    show ?
                        <label>
                            Title:
                            <input className={style.input}
                                   type="text"
                                   placeholder="Task Name"
                                   name="title"
                                   onChange={(e) => titleChange(e.target.value)}
                            />
                        </label>
                        :
                        <b>{props.title}</b>
                }
                <span className={style.stars}>
                    {
                        show ?
                            setPriority()
                            :
                            getPriority()
                    }
                </span>
            </div>
            <div className={style.term}>
                <div>
                    {
                        show ?
							<div>
                            <label>
								Category:
                                <input list="select" name="select" onChange={(e) => categoryChange(e.target.value)} />
								<datalist id="select">
                                    {
                                        props.categories.map((e: string, i: number) => (
                                            <option value={e} key={i + Math.random()}
                                            >
                                                {e}
                                            </option>
                                        ))
                                    }
								</datalist>
							</label>
                            <label>
                                Date:
                                <input className={style.input}
                                       type="datetime-local"
                                       placeholder={props.date}
                                       name="date"
                                       onChange={(e) => dateChange(e.target.value)}
                                />
                            </label>
                            </div>
                            :
                            <i>{props.date}</i>
                    }
                </div>
            </div>
            <div className={style.description}>
                {
                    show ?
                        <label>
                            Descriptions:
                            <textarea className={style.input}
                                      cols={10}
                                      placeholder={props.description}
                                      name="description"
                                      onChange={(e) => descriptionChange(e.target.value)}
                            />
                        </label>
                        :
                        <p>{props.description}</p>
                }
               <span>
                   <i>Created: </i>
                   {props.created}
               </span>
            </div>
            <div className={style.menu}>
                <span className={`${style.btn} ${show ? style.red : style.lime}`}
                      onClick={() => edit(!show)}
                >
                    {show ? "Cancel" : "Edit"}
                </span>
                {
                    show ?
						<span className={`${style.btn} ${style.lime}`}
							  onClick={() => {
                                  props.updateTask({
                                      title: title,
                                      category: category,
                                      priority: priority,
                                      date: date,
                                      description: description,
                                      created: created
                                  },
                                      props.index,
                                      props.id,
                                  );
                                  edit(!show);
                              }}
                        >
                            Save
						</span>
                        :
                        <span className={`${style.btn} ${style.red}`}
                              onClick={() => {
                                  props.deleteTask({}, props.index, props.id);
                                  props.getCategories()
                              }}
                        >
                            Delete
                        </span>
                }
            </div>
        </div>
    )
};

export default connect((state: IReduxState) => {
    return {
        id: state.auth.id,
    };
}, (dispatch) => {
    return {
        updateTask: (data: {[key: string]: string}, index: number, id: string) => dispatch(updateTask(data, index, id)),
        deleteTask: (data: {[key: string]: string}, index: number, id: string) => dispatch(deleteTask(data, index, id)),
        getCategories: () => dispatch(getCategories()),
    }
})(Task)