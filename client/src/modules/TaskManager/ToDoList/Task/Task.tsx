import React from "react";
import style from "./Task.module.scss";
import {IoMdStar} from "react-icons/io";

interface IProps {
    title: string,
    priority: number,
    created: string,
    start: string,
    end: string,
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
            <h4 className={style.title}>
                {
                    show ?
                        <input className={style.input}
                               type="text"
                               placeholder="Task Name"
                               name="title"
                               onChange={(e) => props.changeTask(props.index, props.category, e.target.name, e.target.value)}
                        />
                        :
                        props.title
                }
                <span className={style.stars}>
                    {
                        show ?
                            <input type="number"
                                   defaultValue={props.priority}
                                   name="priority"
                                   onChange={(e) => props.changeTask(props.index, props.category, e.target.name, e.target.value)}
                            />
                            :
                            getPriority()
                    }
                </span>
            </h4>
            <div className={style.term}>
                <div>
                    <i>Start: </i>
                    {
                        show ?
                            <input className={style.input}
                                   type="datetime-local"
                                   placeholder="Start Date"
                                   name="start"
                                   onChange={(e) => props.changeTask(props.index, props.category, e.target.name, e.target.value)}
                            />
                            :
                            <b>{props.start}</b>
                    }
                </div>
                <div>
                    <i>End: </i>
                    {
                        show ?
                            <input className={style.input}
                                   type="datetime-local"
                                   placeholder="End Date"
                                   name="end"
                                   onChange={(e) => props.changeTask(props.index, props.category, e.target.name, e.target.value)}
                            />
                            :
                            <b>{props.end}</b>
                    }
                </div>
            </div>
            <div className={style.description}>
                {
                    show ?
                        <textarea className={style.input}
                                  cols={10}
                               placeholder="Task Description..."
                               name="description"
                               onChange={(e) => props.changeTask(props.index, props.category, e.target.name, e.target.value)}
                        />
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