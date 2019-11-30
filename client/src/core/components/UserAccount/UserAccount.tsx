import React from "react";
import style from "./UserAccount.module.scss";
import { FaUser, FaPencilAlt } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";

interface IProps {
    user: any,
    userAccountController: any,
}

const UserAccount: React.FC<IProps> = (props) => {
    let [avatar, avatarChange] = React.useState(false);
    let [firstName, firstNameChange] = React.useState(false);
    let [lastName, lastNameChange] = React.useState(false);
    let [email, emailChange] = React.useState(false);
    let [birthday, birthdayChange] = React.useState(false);
    let [location, locationChange] = React.useState(false);

    return (
        <div className={style.UserAccount}>
            <div className={style.head}>
                <div>
                    {
                        props.user.avatar ?
                            <img src={props.user.avatar} alt={props.user.userName} title={`Nice Photo, ${props.user.userName} 😉`}/>
                            :
                            <FaUser title={props.user.userName} />
                    }
                    <MdAddAPhoto style={{cursor: "pointer"}}
                                 title="Change Photo"
                                 onClick={() => avatarChange(!avatar)}
                    />
                    <input type="file" style={{display: avatar?"block":"none"}}
                           onChange={(e) => props.userAccountController("avatar", e.target.value)}/>
                </div>
                <h4>{props.user.firstName} {props.user.lastName}</h4>
            </div>
            <table className={style.body}>
                <thead>
                <tr>
                    <td> </td>
                    <td> </td>
                </tr>
                </thead>
                <tbody>
                <tr className={style.item}>
                    <td className={style.item_name}>id:</td>
                    <td className={style.item_value}>
                        {props.user.id}
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>First Name:</td>
                    <td className={style.item_value}>
                        {props.user.firstName}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit First Name"
                                     onClick={() => firstNameChange(!firstName)}
                        />
                        <input style={{display: firstName?"block":"none"}} className={style.dataChange}
                               defaultValue={props.user.firstName}
                               onChange={(e) => props.userAccountController("firstName", e.target.value)}
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Last Name:</td>
                    <td className={style.item_value}>
                        {props.user.lastName}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit Last Name"
                                     onClick={() => lastNameChange(!lastName)}
                        />
                        <input style={{display: lastName?"block":"none"}} className={style.dataChange}
                               defaultValue={props.user.lastName}
                               onChange={(e) => props.userAccountController("lastName", e.target.value)}
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Email:</td>
                    <td className={style.item_value}>
                        {props.user.email}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit Email"
                                     onClick={() => emailChange(!email)}
                        />
                        <input style={{display: email?"block":"none"}} className={style.dataChange}
                               defaultValue={props.user.email}
                               onChange={(e) => props.userAccountController("email", e.target.value)}
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Birth Date:</td>
                    <td className={style.item_value}>
                        {props.user.birthday}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit Birth Date"
                                     onClick={() => birthdayChange(!birthday)}
                        />
                        <input style={{display: birthday?"block":"none"}} className={style.dataChange}
                               defaultValue={props.user.birthday}
                               onChange={(e) => props.userAccountController("birthday", e.target.value)}
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Location:</td>
                    <td className={style.item_value}>
                        {props.user.location}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit Location"
                                     onClick={() => locationChange(!location)}
                        />
                        <input style={{display: location?"block":"none"}} className={style.dataChange}
                               defaultValue={props.user.location}
                               onChange={(e) => props.userAccountController("location", e.target.value)}
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Registration Date:</td>
                    <td className={style.item_value}>
                        {props.user.registration}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

export default UserAccount;
