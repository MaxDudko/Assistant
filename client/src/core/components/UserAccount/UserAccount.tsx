import React from "react";
import style from "./UserAccount.module.scss";
import { FaUser, FaPencilAlt } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";

interface IProps {
    userData: any,
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
                        props.userData.avatar ?
                            <img src={props.userData.avatar} alt={props.userData.userName} title={`Nice Photo, ${props.userData.userName} 😉`}/>
                            :
                            <FaUser title={props.userData.userName} />
                    }
                    <MdAddAPhoto style={{cursor: "pointer"}}
                                 title="Change Photo"
                                 onClick={() => avatarChange(!avatar)}
                    />
                    {/*<input type="file" style={{display: avatar?"block":"none"}}*/}
                    {/*       onChange={(e) => props.userAccountController("avatar", e.target.value)}/>*/}
                </div>
                <h4>{props.userData.firstName} {props.userData.lastName}</h4>
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
                        {props.userData.id}
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>First Name:</td>
                    <td className={style.item_value}>
                        {props.userData.firstName}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit First Name"
                                     onClick={() => firstNameChange(!firstName)}
                        />
                        <input style={{display: firstName?"block":"none"}} className={style.dataChange}
                               defaultValue={props.userData.firstName}
                               onChange={(e) => props.userAccountController("firstName", e.target.value)}
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Last Name:</td>
                    <td className={style.item_value}>
                        {props.userData.lastName}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit Last Name"
                                     onClick={() => lastNameChange(!lastName)}
                        />
                        <input style={{display: lastName?"block":"none"}} className={style.dataChange}
                               defaultValue={props.userData.lastName}
                               onChange={(e) => props.userAccountController("lastName", e.target.value)}
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Email:</td>
                    <td className={style.item_value}>
                        {props.userData.email}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit Email"
                                     onClick={() => emailChange(!email)}
                        />
                        <input style={{display: email?"block":"none"}} className={style.dataChange}
                               defaultValue={props.userData.email}
                               onChange={(e) => props.userAccountController("email", e.target.value)}
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Birth Date:</td>
                    <td className={style.item_value}>
                        {props.userData.birthday}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit Birth Date"
                                     onClick={() => birthdayChange(!birthday)}
                        />
                        <input style={{display: birthday?"block":"none"}} className={style.dataChange}
                               defaultValue={props.userData.birthday}
                               onChange={(e) => props.userAccountController("birthday", e.target.value)}
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Location:</td>
                    <td className={style.item_value}>
                        {props.userData.location}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit Location"
                                     onClick={() => locationChange(!location)}
                        />
                        <input style={{display: location?"block":"none"}} className={style.dataChange}
                               defaultValue={props.userData.location}
                               onChange={(e) => props.userAccountController("location", e.target.value)}
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Registration Date:</td>
                    <td className={style.item_value}>
                        {props.userData.registration}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

export default UserAccount;
