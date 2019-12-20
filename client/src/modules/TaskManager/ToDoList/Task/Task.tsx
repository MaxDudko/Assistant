import React from "react";
import style from "./Task.module.scss";
import {IoMdStar} from "react-icons/io";

interface IProps {
    title: string,
    priority: number,
    created: string,
    date: string,
    description: string,
    changeTask: any,
    index: number,
    category: string,
}

const Task: React.FC<IProps> = (props) => {
    let [priority, priorityChange] = React.useState(props.priority);
    let [show, edit] = React.useState(false);

    const getPriority = () => {
        let stars = [];
        for(let i = 1; i <= 5; i++) {
            i <= priority ?
                stars.push(
                    <IoMdStar key={i}
                              style={{color: "gold"}}
                              // onClick={() => {
                              //     priorityChange(priority - i);
                              //     props.changeTask(props.index, props.category, "priority", priority)
                              // }}
                    />
                )
                :
                stars.push(
                    <IoMdStar key={i}
                              style={{color: "gray"}}
                              // onClick={() =>{
                              //     priorityChange(priority + i);
                              //     props.changeTask(props.index, props.category, "priority", priority)
                              // }}
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
                                   onChange={(e) => props.changeTask(props.index, props.category, e.target.name, e.target.value)}
                            />
                        </label>
                        :
                        <b>{props.title}</b>
                }
                <span className={style.stars}>
                    {
                        show ?
                            <label style={{display: "flex", flexDirection: "row"}}>
                                Priority:
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                            </label>
                            :
                            getPriority()
                    }
                </span>
            </div>
            <div className={style.term}>
                <div>
                    {
                        show ?
                            <label>
                                Date:
                                <input className={style.input}
                                       type="datetime-local"
                                       placeholder={props.date}
                                       name="date"
                                       onChange={(e) => props.changeTask(props.index, props.category, e.target.name, e.target.value)}
                                />
                            </label>
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
                                      onChange={(e) => props.changeTask(props.index, props.category, e.target.name, e.target.value)}
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
                <span className={style.btn}
                      onClick={() => edit(!show)}
                >
                    Edit
                </span>
                <span className={style.btn}
                      onClick={() => props.changeTask()}
                >
                    Save
                </span>
                <span className={style.btn}>Done</span>
                <span className={style.btn}>Delete</span>
            </div>
        </div>
    )
};

export default Task;