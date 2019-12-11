import React from "react";
import style from "./UserAccount.module.scss";
import { FaUser, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
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
                        <span>{props.userData.id}</span>
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>First Name:</td>
                    <td className={style.item_value}>
                        <span style={{display: firstName?"none":"block"}}>{props.userData.firstName}</span>
                        <input style={{display: firstName?"block":"none"}} className={style.dataChange}
                               defaultValue={props.userData.firstName}
                               onChange={(e) => props.userAccountController("firstName", e.target.value)}
                        />
                        {
                            firstName ?
                                <FaPlusCircle className={style.item_icon}
                                              title="Save First Name"
                                              onClick={() => firstNameChange(!firstName)}
                                />
                                :
                                <FaPencilAlt className={style.item_icon}
                                             title="Edit First Name"
                                             onClick={() => firstNameChange(!firstName)}
                                />
                        }
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Last Name:</td>
                    <td className={style.item_value}>
                        <span style={{display: lastName?"none":"block"}}>{props.userData.lastName}</span>
                        <input style={{display: lastName?"block":"none"}} className={style.dataChange}
                               defaultValue={props.userData.lastName}
                               onChange={(e) => props.userAccountController("lastName", e.target.value)}
                        />
                        {
                            lastName ?
                                <FaPlusCircle className={style.item_icon}
                                              title="Save Last Name"
                                              onClick={() => lastNameChange(!lastName)}
                                />
                                :
                                <FaPencilAlt className={style.item_icon}
                                             title="Edit Last Name"
                                             onClick={() => lastNameChange(!lastName)}
                                />
                        }
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Email:</td>
                    <td className={style.item_value}>
                        <span style={{display: email?"none":"block"}}>{props.userData.email}</span>
                        <input style={{display: email?"block":"none"}} className={style.dataChange}
                               defaultValue={props.userData.email}
                               onChange={(e) => props.userAccountController("email", e.target.value)}
                        />
                        {
                            email ?
                                <FaPlusCircle className={style.item_icon}
                                              title="Save Email"
                                              onClick={() => emailChange(!email)}
                                />
                                :
                                <FaPencilAlt className={style.item_icon}
                                             title="Edit Email"
                                             onClick={() => emailChange(!email)}
                                />
                        }
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Birth Date:</td>
                    <td className={style.item_value}>
                        <span style={{display: birthday?"none":"block"}}>{props.userData.birthday}</span>
                        <input style={{display: birthday?"block":"none"}} className={style.dataChange}
                               defaultValue={props.userData.birthday}
                               onChange={(e) => props.userAccountController("birthday", e.target.value)}
                        />
                        {
                            birthday ?
                                <FaPlusCircle className={style.item_icon}
                                              title="Save Birthday Date"
                                              onClick={() => birthdayChange(!birthday)}
                                />
                                :
                                <FaPencilAlt className={style.item_icon}
                                             title="Edit Birthday Date"
                                             onClick={() => birthdayChange(!birthday)}
                                />
                        }
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Location:</td>
                    <td className={style.item_value}>
                        <span style={{display: location?"none":"block"}}>{props.userData.location}</span>
                        <input style={{display: location?"block":"none"}} className={style.dataChange}
                               defaultValue={props.userData.location}
                               onChange={(e) => props.userAccountController("location", e.target.value)}
                        />
                        {
                            location ?
								<FaPlusCircle className={style.item_icon}
										  title="Save Location"
										  onClick={() => locationChange(!location)}
								/>
								:
                                <FaPencilAlt className={style.item_icon}
                                             title="Edit Location"
                                             onClick={() => locationChange(!location)}
                                />
                        }
                    </td>
                </tr>
                <tr className={style.item}>
                    <td className={style.item_name}>Registration Date:</td>
                    <td className={style.item_value}>
                        <span>{new Date(props.userData.registrationDate).toLocaleDateString()}</span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button className={style.btn}
                                onClick={() => props.userAccountController()}
                        >
                            Update
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

export default UserAccount;
