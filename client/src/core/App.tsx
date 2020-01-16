import React from 'react';
import style from './App.module.scss';

import Authentication from "./Authentication/Authentication";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import DashBoard from "./DashBoard/DashBoard";
import Notifications from "./Notifications/Notifications";
import Settings from "./Settings/Settings";
import UserAccount from "./UserAccount/UserAccount";

import axios from 'axios';
import {connect} from "react-redux";
import {IReduxState} from "../store/reducers";
import {setID, getProfileData, getNotificationsData} from "../store/actions";

interface IState {}

interface IProps {
    id: string,
    setID: any,
    getProfileData: any,
    getNotificationsData: any,
    modalSelected: string | null,
    SidebarItems: any,
}

class App extends React.Component<IProps, IState> {

  componentDidMount(): void {
      const token = window.localStorage.getItem('token');
      console.log('token: ', token);
      if(!token) return;
      axios.get('http://localhost:4000/auth/get/', {
          headers: {
              Authorization: `Token ${token}`
          }
      })
          .then((response) => {
              console.log('/auth/get: ', response);
              let id = response.data.user._id;
              this.props.setID(id);
              this.props.getProfileData(id);
              this.props.getNotificationsData(id);
          })
          .catch((error) => {
              console.log('/auth/get: ', error);
              window.localStorage.clear();
          });
  }

    authController(form:string, data:any) {
      // logout
      if(!form) {
          window.localStorage.clear();
          return;
      }
      console.log(data);
      this.setState({isRemember: data.remember});
      axios.post(`http://localhost:4000/auth/${form}/`, {
          "user": {
              ...data
          }
      })
          .then((response) => {
              console.log(`/auth/${form}: `, response);
              window.localStorage.setItem('token', response.data.user.token);
              authReady();
          })
          .catch(function (error) {
              console.log(`/auth/${form}: `, error);
          });

      const authReady = () => this.setState({isLogin: window.localStorage.getItem('token')});
  }

  openModal() {
      let modal = this.props.modalSelected;

      const allModals: { [key: string]: any } = {
          Notifications: <Notifications/>,
          Settings: <Settings/>,
          UserAccount: <UserAccount/>,

      };

      if(modal === null) return;
      return allModals[modal];
  }

   render() {
      return(
          <div className={style.App}>
              {
                  window.localStorage.getItem('token') ?
                      <div>
                          <Navbar authController={this.authController.bind(this)} />
                          <div className={style.wrapper}>
                              <Sidebar SidebarItems={this.props.SidebarItems}/>
                              <DashBoard />
                              {
                                  this.props.modalSelected !== null ?
                                      <div className={style.modal}>
                                          {this.openModal()}
                                      </div>
                                      :
                                      null
                              }
                          </div>
                      </div>
                      :
                      <Authentication authController={this.authController.bind(this)}/>
              }
          </div>
      )
  }
}


export default connect((state: IReduxState) => {
    return {
        id: state.auth.id,
        modalSelected: state.common.modalSelected,
        SidebarItems: state.common.SidebarItems,
    };
}, (dispatch) => {
    return {
        setID: (id: string) => dispatch(setID(id)),
        getProfileData: (id: string) => dispatch(getProfileData(id)),
        getNotificationsData: (id: string) => dispatch(getNotificationsData(id)),
    }
})(App)
