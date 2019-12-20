import React from "react";
import style from "./Category.module.scss";
import {MdPlaylistAdd} from "react-icons/md";
import {FaRegEdit, FaPlusCircle} from "react-icons/fa";
import {TiDeleteOutline} from "react-icons/ti";

interface IProps {
    categories: string[],
    setCategories: any,
    deleteCategories: any,
    selectCategories: any,
}

const Category: React.FC<IProps> = (props) => {
    // let [isChange, changed] = React.useState(false);
    let [addCategory, showAdd] = React.useState(false);
    let [newCategory, addCategories] = React.useState("");
    return(
        <div className={style.Category}>
            {/*<span className={style.title}>Category:</span>*/}
            <div className={style.categoryType}>
                <span className={style.categoryType}
                      onClick={() => props.selectCategories("All")}
                >
                    All
                </span>
            </div>
            {
                props.categories.map((name, i) => {
                    return [
                        <div className={style.categoryType} key={i}>
                            <span className={style.name}
                                  onClick={() => props.selectCategories(name)}
                            >
                                {name}
                            </span>
                            <div>
                                <span className={style.btn}><FaRegEdit/></span>
                                <span className={style.btn}
                                      onClick={() => props.deleteCategories(name)}
                                >
                                    <TiDeleteOutline/>
                                </span>
                            </div>
                        </div>
                    ]
                })
            }
            <span className={style.categoryAdd}>
                {
                    addCategory ?
                        <div className={style.dropdown}>
                            <input type="text" placeholder="New Category"
                                   onChange={(e) => addCategories(e.target.value)}
                            />
                            <FaPlusCircle onClick={() => props.setCategories(newCategory)} />
                        </div>
                        :
                        null
                }
                <MdPlaylistAdd onClick={() => showAdd(!addCategory)} />
            </span>
        </div>
    )
};

export default Category;