import React from "react";
import style from "./UserAccount.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPencilAlt, faPhotoVideo } from "@fortawesome/free-solid-svg-icons";

interface IProps {
    user: any
}

const UserAccount: React.FC<IProps> = (props) => {
    return (
        <div className={style.UserAccount}>
            <div className={style.head}>
                <div>
                    {
                        props.user.avatar ?
                            <img src={props.user.avatar} alt={props.user.userName} title={`Nice Photo, ${props.user.userName} 😉`}/>
                            :
                            <FontAwesomeIcon icon={faUser}
                                             title={props.user.userName}
                            />
                    }
                    <FontAwesomeIcon icon={faPhotoVideo}
                                     style={{cursor: "pointer"}}
                                     title="Change Photo"
                    />
                </div>
                <h4>{props.user.firstName} {props.user.lastName}</h4>
            </div>
            <div className={style.body}>
                <p className={style.item}>
                    <span className={style.item_name}>id:</span>
                    {props.user.id}
                </p>
                <p className={style.item}>
                    <span className={style.item_name}>First Name:</span>
                    {props.user.firstName}
                    <FontAwesomeIcon icon={faPencilAlt}
                                     className={style.item_icon}
                                     title="Edit First Name"
                    />
                </p>
                <p className={style.item}>
                    <span className={style.item_name}>Last Name:</span>
                    {props.user.lastName}
                    <FontAwesomeIcon icon={faPencilAlt}
                                     className={style.item_icon}
                                     title="Edit Last Name"
                    />
                </p>
                <p className={style.item}>
                    <span className={style.item_name}>Email:</span>
                    {props.user.email}
                    <FontAwesomeIcon icon={faPencilAlt}
                                     className={style.item_icon}
                                     title="Edit Email"
                    />
                </p>
                <p className={style.item}>
                    <span className={style.item_name}>Birth Date:</span>
                    {props.user.birthday}
                    <FontAwesomeIcon icon={faPencilAlt}
                                     className={style.item_icon}
                                     title="Edit Birth Date"
                    />
                </p>
                <p className={style.item}>
                    <span className={style.item_name}>Location:</span>
                    {props.user.location}
                    <FontAwesomeIcon icon={faPencilAlt}
                                     className={style.item_icon}
                                     title="Edit Location"
                    />
                </p>
                <p className={style.item}>
                    <span className={style.item_name}>Registration Date:</span>
                    {props.user.registration}
                </p>
            </div>
        </div>
    )
};

export default UserAccount;
