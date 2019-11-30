import React from "react";
import style from "./PersonalFinance.module.scss";

interface iState {}

class PersonalFinance extends React.Component<{}, iState>{
    render() {
        return (
            <div className={style.PersonalFinance}>
                <h1>Personal Finance</h1>
            </div>
        );
    }
}

export default PersonalFinance;
