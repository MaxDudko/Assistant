import React from "react";
import style from "./AgileKanban.module.scss";
import { GoProject } from "react-icons/go";

interface iState {}

class AgileKanban extends React.Component<{}, iState>{
    render() {
        return (
            <div className={style.Kanban}>
                <h1>Agile Kanban</h1>
                <div style={{display: "flex", justifyContent: "center", paddingBottom: "20px"}}>
                    <GoProject style={{fontSize: "100px", color: "BlueViolet"}}/>
                </div>
            </div>
        );
    }
}

export default AgileKanban;
