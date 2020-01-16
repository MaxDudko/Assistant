import React from "react";
import style from "./Category.module.scss";

import {connect} from "react-redux";
import {IReduxState} from "../../../store/reducers";
import {selectCategory} from "../../../store/actions";

interface IProps {
    categories: any,
    selectCategory: any,
    selectedCategory: string,
}

const Category: React.FC<IProps> = (props) => {

    return(
        <div className={style.Category}>
            <div className={style.categoryType}>
                <span className={`${style.categoryType} ${props.selectedCategory === "All" ? style.selected : ''}`}
                      onClick={() => props.selectCategory("All")}
                >
                    All
                </span>
            </div>
            {
                props.categories.map((name: string, i: number) => {
                    return [
                        <div className={style.categoryType} key={i}>

                            <span className={`${style.name} ${props.selectedCategory === name ? style.selected : ''}`}
                                  onClick={() => props.selectCategory(name)}
                            >
                                {name}
                            </span>

                        </div>
                    ]
                })
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
        selectCategory: (category: string) => dispatch(selectCategory(category)),
    }
})(Category)
