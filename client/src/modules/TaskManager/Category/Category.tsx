import React from "react";
import style from "./Category.module.scss";
import {MdPlaylistAdd, MdDoneAll} from "react-icons/md";
import {FaRegEdit} from "react-icons/fa";
import {GiSplitCross} from "react-icons/gi";

interface IProps {
    categories: string[],
    selectCategories: any,
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
                      onClick={() => props.selectCategories("All")}
                >
                    All
                </span>
            </div>
            {
                props.categories.map((name, i) => {
                    return [
                        <div className={style.categoryType} key={i}>

                            <span className={`${style.name} ${props.selectedCategory === name ? style.selected : ''}`}
                                  onClick={() => props.selectCategories(name)}
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

export default Category;
