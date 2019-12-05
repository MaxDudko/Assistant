import React from 'react';
import style from './App.module.scss';
import axios from 'axios';

import Authentication from "./components/Authentication/Authentication";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import DashBoard from "./components/DashBoard/DashBoard";
import Notifications from "./components/Notifications/Notifications";
import Settings from "./components/Settings/Settings";
import UserAccount from "./components/UserAccount/UserAccount";

import data from "./data";

interface IState {
    isLogin: string | null,

    // profile: any,
    // settings: any,
    // notifications: any,

    userData: any,
    SidebarItems: any,
    notifications:  any,
    isCollapsed: boolean,
    modalSelected: string | null,
    settingsSelected: string | null,
    moduleSelected: string,
    [key: string]: any

}

class App extends React.Component<{}, IState> {
  state: IState = {
      isLogin: window.localStorage.getItem('token'),

      // profile: [],
      // settings: [],
      // notifications: [],

      userData: data.user,
      SidebarItems: data.SidebarItems,
      notifications: data.notifications,
      isCollapsed: false,
      modalSelected: null,
      settingsSelected: null,
      moduleSelected: "DashBoard",
  };

  componentDidMount(): void {
      const token = this.state.isLogin;
      console.log(token);
      axios.get('http://localhost:4000/auth/get/', {
          headers: {
              Authorization: `Token ${token}`
          }
      })
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
              window.localStorage.clear();
          });
  }

    authController(form:string, data:object) {
      // logout
      if(!form) {
          window.localStorage.clear();
          this.setState({isLogin: null});
          return;
      }

      // login/register
      console.log(data);

      axios.post(`http://localhost:4000/auth/${form}/`, {
          "user": {
              ...data
          }
      })
          .then(function (response) {
              console.log(response);
              window.localStorage.setItem('token', response.data.user.token);
              authReady();
          })
          .catch(function (error) {
              console.log(error);
          });

      const authReady = () => this.setState({isLogin: window.localStorage.getItem('token')});
  }

  viewController() {
      this.setState({isCollapsed: !this.state.isCollapsed})
  }

  selectController(key: any, selected: string) {
      if(key === "modalSelected") {
          this.state[key] === selected ?
              this.setState({[key]: null})
              :
              this.setState({[key]: selected})
      } else {
          this.setState({[key]: selected})
      }
  }

  openModal() {
      let modal = this.state.modalSelected;

      const allModals: { [key: string]: any } = {
          Notifications: <Notifications notifications={this.state.notifications}
                                        notificationsController={this.notificationsController.bind(this)}
          />,

          Settings: <Settings selectController={this.selectController.bind(this)}
                              settingsSelected={this.state.settingsSelected}
          />,

          UserAccount: <UserAccount userData={this.state.userData}
                                    userAccountController={this.userAccountController.bind(this)}
          />,

      };

      if(modal === null) return;
      return allModals[modal];
  }

  notificationsController(id: number) {
      let index;
      this.state.notifications.map((el:any, i: number) => {
          if(el["id"] === id) {
              index = i;
          }
      });

      let state = this.state.notifications;
      state.splice(index, 1);

      this.setState({notifications: state})
  }

  userAccountController(key:string, value:string) {
      this.setState({
          userData: {
              ...this.state.userData,
              [key]: value
          }
      })
  }

   render() {
      return(
          <div className={style.App}>
              {
                  this.state.isLogin ?
                      <div>
                          <Navbar isLogin={this.state.isLogin}
                                  userName={this.state.userData.userName}
                                  avatar={this.state.userData.avatar}
                                  notifications={this.state.notifications.length}
                                  selectController={this.selectController.bind(this)}
                                  signOut={this.authController.bind(this)}
                          />
                          <div className={style.wrapper}>
                              <Sidebar isCollapsed={this.state.isCollapsed}
                                       viewController={this.viewController.bind(this)}
                                       SidebarItems={this.state.SidebarItems}
                                       selectController={this.selectController.bind(this)}
                              />
                              <DashBoard moduleSelected={this.state.moduleSelected}
                                         isCollapsed={this.state.isCollapsed}
                              />
                              {
                                  this.state.modalSelected !== null ?
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

export default App;
