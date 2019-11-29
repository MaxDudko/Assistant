import React from "react";
import style from "./UserAccount.module.scss";
import { FaUser, FaPencilAlt } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";

interface IProps {
    user: any,
    userAccountController: any,
}

const UserAccount: React.FC<IProps> = (props) => {
    let [firstName, firstNameChange] = React.useState(true);
    let [lastName, lastNameChange] = React.useState(true);
    let [email, emailChange] = React.useState(true);
    let [birthday, birthdayChange] = React.useState(true);
    let [location, locationChange] = React.useState(true);

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
                    />
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
                        {/*?!?!*/}
                        <input type="text"
                               value={props.user.firstName}
                               disabled={firstName}
                               onChange={(e) => props.userAccountController("firstName", e)}
                        />
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit First Name"
                                     onClick={() => firstNameChange(!firstName)}
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Last Name:</td>
                    <td className={style.item_value}>
                        {props.user.lastName}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit Last Name"
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Email:</td>
                    <td className={style.item_value}>
                        {props.user.email}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit Email"
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Birth Date:</td>
                    <td className={style.item_value}>
                        {props.user.birthday}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit Birth Date"
                        />
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Location:</td>
                    <td className={style.item_value}>
                        {props.user.location}
                        <FaPencilAlt className={style.item_icon}
                                     title="Edit Location"
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
