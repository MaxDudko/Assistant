import React from "react";
import style from "./Category.module.scss";
import {MdPlaylistAdd, MdDoneAll} from "react-icons/md";
import {FaRegEdit} from "react-icons/fa";
// import {TiDeleteOutline} from "react-icons/ti";
import {GiSplitCross} from "react-icons/gi";

interface IProps {
    categories: string[],
    setCategories: any,
    deleteCategories: any,
    selectCategories: any,
    showPopup: any,
}

const Category: React.FC<IProps> = (props) => {
    // let [isChange, changed] = React.useState(false);
    let [addCategory, showAdd] = React.useState(false);
    let [editCategory, showEdit] = React.useState(false);
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
                                {
                                    editCategory ?
                                        <div className={style.dropdown} id={name}>
                                            <input type="text" placeholder="New Category"
                                                   // onChange={(e) => addCategories(e.target.value)}
                                            />
                                            <MdDoneAll className={style.btn}
                                                       // onClick={() => props.setCategories(newCategory)}
                                            />
                                            <GiSplitCross className={style.btn}
                                                          // onClick={() => showAdd(!addCategory)}
                                            />
                                        </div>
                                        :
                                        <span>{name}</span>
                                }
                            </span>
                            <div>
                                <span className={style.btn}
                                      // onClick={() => showEdit(!editCategory)}
                                >
                                    <FaRegEdit/>
                                </span>
                                <span className={style.btn}
                                      // onClick={() => props.showPopup({
                                      //     question: `Are you sure want delete category: ${name} and All tasks in this category?`,
                                      //     yes: props.deleteCategories,
                                      //     no: props.showPopup,
                                      //     value: [name]
                                      // })}
                                    onClick={() => props.deleteCategories(name)}
                                >
                                    <GiSplitCross/>
                                </span>
                            </div>
                        </div>
                    ]
                })
            }
            {
                addCategory ?
                    <div className={style.dropdown}>
                        <input type="text" placeholder="New Category"
                               onChange={(e) => addCategories(e.target.value)}
                        />
                        <MdDoneAll className={style.btn}
                            onClick={() => props.setCategories(newCategory)}
                        />
                        <GiSplitCross className={style.btn}
                                      onClick={() => showAdd(!addCategory)}
                        />
                    </div>
                    :
                    <span className={style.categoryAdd}>
                        <MdPlaylistAdd onClick={() => showAdd(!addCategory)} />
                    </span>
            }
        </div>
    )
};

export default Category;
