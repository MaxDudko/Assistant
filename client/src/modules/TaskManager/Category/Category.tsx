import React from "react";
import style from "./Category.module.scss";

import {connect} from "react-redux";
import {IReduxState} from "../../../store/reducers";
import {selectCategory} from "../../../store/actions";

interface IProps {
    categories: any,
    selectCategory: any,
    selectedCategory: string,
    tasks_data: any,
}

const Category: React.FC<IProps> = (props) => {

    return(
        <div className={style.Category}>
            <div className={`${style.categoryType} ${props.selectedCategory === "All" ? style.selected : ''}`}
                 onClick={() => props.selectCategory("All")}
            >
                All
                <span className={style.length}>{props.tasks_data.length}</span>
            </div>
            {
                props.categories.map((name: string, i: number) => {
                    return [
                        <div className={`${style.categoryType} ${props.selectedCategory === name ? style.selected : ''}`}
                             onClick={() => props.selectCategory(name)}
                             key={i}
                        >
                            {name}
                        </div>
                    ]
                })
            }
            <div style={{flexGrow: 1, height: "100%", background: "#353A40"}}> </div>
        </div>
    )
};

export default connect((state: IReduxState) => {
    return {
        id: state.auth.id,
        tasks_data: state.tasks.tasks_data,
    };
}, (dispatch) => {
    return {
        selectCategory: (category: string) => dispatch(selectCategory(category)),
    }
})(Category)
