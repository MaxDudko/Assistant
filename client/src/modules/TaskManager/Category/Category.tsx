import React from "react";
import style from "./Category.module.scss";
import {MdPlaylistAdd} from "react-icons/md";

interface IProps {

}

const Category: React.FC<IProps> = (props) => {
    return(
        <div className={style.Category}>
            <span className={style.title}>Category:</span>
            <span className={style.categoryType}>All</span>
            <span className={style.categoryType}>Life</span>
            <span className={style.categoryType}>Work</span>
            <span className={style.categoryType}>Other</span>
            <span className={style.categoryAdd}>
                <MdPlaylistAdd />
            </span>
        </div>
    )
};

export default Category;