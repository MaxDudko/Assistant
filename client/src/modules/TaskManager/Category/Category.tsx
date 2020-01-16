import React from "react";
import style from "./Category.module.scss";
import {MdPlaylistAdd, MdDoneAll} from "react-icons/md";
import {FaRegEdit} from "react-icons/fa";
import {GiSplitCross} from "react-icons/gi";
import {connect} from "react-redux";
import {IReduxState} from "../../../store/reducers";
import {selectCategory} from "../../../store/actions/tasks";

interface IProps {
    categories: any,
    selectCategory: any,
    selectedCategory: string,
}

const Category: React.FC<IProps> = (props) => {
    // let [isChange, changed] = React.useState(false);
    // let [addCategory, showAdd] = React.useState(false);
    // let [editCategory, showEdit] = React.useState(false);
    // let [newCategory, addCategories] = React.useState("");
    return(
        <div className={style.Category}>
            {/*<span className={style.title}>Category:</span>*/}
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
        // categories: state.tasks.categories,
    };
}, (dispatch) => {
    return {
        selectCategory: (category: string) => dispatch(selectCategory(category)),
    }
})(Category)
