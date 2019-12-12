import React from "react";
import style from "./PersonalFinance.module.scss";
import {MdMonetizationOn} from "react-icons/md";

interface iState {}

class PersonalFinance extends React.Component<{}, iState>{
    render() {
        return (
            <div className={style.PersonalFinance}>
                <h1>Personal Finance</h1>
                <div style={{display: "flex", justifyContent: "center", paddingBottom: "20px"}}>
                    <MdMonetizationOn style={{fontSize: "100px", color: "green"}}/>
                </div>
            </div>
        );
    }
}

export default PersonalFinance;
