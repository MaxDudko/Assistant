import React from "react";
import style from "./UserAccount.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface IProps {
    user: any
}

const UserAccount: React.FC<IProps> = (props) => {
    return (
        <div className={style.UserAccount}>
            <div className={style.head}>
                {
                    props.user.avatar ?
						<img src={props.user.avatar} alt={props.user.userName} title={`Nice Photo, ${props.user.userName} 😉`}/>
						:
                        <FontAwesomeIcon icon={faUser}
                                         title={props.user.userName}
                        />
                }
                <h4>{props.user.firstName} {props.user.lastName}</h4>
            </div>
            <div className={style.body}>
                <p><span>id:</span>{props.user.id}</p>
                <p><span>first name:</span>{props.user.firstName}</p>
                <p><span>last name:</span>{props.user.lastName}</p>
                <p><span>email:</span>{props.user.email}</p>
                <p><span>birth date:</span>{props.user.birthday}</p>
                <p><span>location:</span>{props.user.location}</p>
            </div>
        </div>
    )
};

export default UserAccount;
