import React from "react";
import style from "./Popup.module.scss";

interface IProps {
    data: any
}

const Popup: React.FC<IProps> = (props) => {
    return(
        <div className={style.PopupWrapper}>
            <div className={style.PopupBody}>
                <h4>{props.data.question}</h4>
                <div>
                    <span className={style.btn}
                          onClick={() => props.data.yes([props.data.value])}
                    >
                        Yes
                    </span>
                    <span className={style.btn}
                          onClick={() => props.data.no()}
                    >
                        No
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Popup;
