import React from "react";
import style from "./Authentication.module.scss";
import logo from "../../../assets/img/mern.png";
import {Button, Card, Form, Modal, Tabs, Tab} from "react-bootstrap";


interface IProps {}

const Authentication: React.FC<IProps> = (props) => {
    const [ active, setActive ] = React.useState(null);


    return (
        <div className={style.Authentication}>

        </div>
    )
};

export default Authentication;
