import React from 'react';
import style from './App.module.scss';
import axios from 'axios';
import {connect} from "react-redux";

import Authentication from "./Authentication/Authentication";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import DashBoard from "./DashBoard/DashBoard";
import Notifications from "./Notifications/Notifications";
import Settings from "./Settings/Settings";
import UserAccount from "./UserAccount/UserAccount";
// import Popup from "./components/Popup/Popup";

import data from "../assets/data";
import {IReduxState} from "../store";

interface IState {
    isLogin: string | null,
    id: string,

    SidebarItems: any,
    isCollapsed: boolean,
    modalSelected: string | null,
    settingsSelected: string | null,
    moduleSelected: string,
    popupShow: boolean,
    [key: string]: any

}

interface IProps {
    getProfileData: any,
    profile: any,
    getNotificationsData: any,
    notifications: any,

}

class App extends React.Component<IProps, IState> {
  state: IState = {
      isLogin: window.localStorage.getItem('token'),
      id: "",

      profile: [],
      settings: [],
      notifications: [],

      SidebarItems: data.SidebarItems,
      isCollapsed: false,
      modalSelected: null,
      settingsSelected: null,
      // moduleSelected: "DashBoard",
      moduleSelected: "TaskManager",
      popupShow: false,
  };

  componentDidMount(): void {
      const token = this.state.isLogin;
      // const remember = (value: boolean) => this.setState({isRemember: value});
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
              setID(id);
              this.props.getProfileData(id);
              // getSettings(id);
              // getProfile(id);
              // getNotifications(id);
              this.props.getNotificationsData(id);
              // this.getTasks(id);
              // remember(response.data.user.remember);
          })
          .catch((error) => {
              console.log('/auth/get: ', error);
              window.localStorage.clear();
          });

      const setID = (id: string) => this.setState({id: id});
      const setProfileData = (data: any) => this.setState({profile: data});
      const setNotificationsData = (data: any) => this.setState({notifications: data});
      const setSettingsData = (data: any) => this.setState({settings: data});

      // this.props.getProfileData(this.state.id);
      
      // const getProfile = (id: string) => axios.post('http://localhost:4000/profile/get/', {
      //     "id": id
      // })
      //     .then((response) => {
      //         console.log('/profile/get: ', response);
      //         setProfileData(response.data);
      //     })
      //     .catch((error) => {
      //         console.log('/profile/get: ', error)
      //     });

      const getNotifications = (id: string) => axios.post('http://localhost:4000/notifications/get/', {
          "id": id
      })
          .then((response) => {
              console.log('/notifications/get: ', response);
              setNotificationsData(response.data);
          })
          .catch((error) => {
              console.log('/notifications/get: ', error);
          });

      const getSettings = (id: string) => axios.post('http://localhost:4000/settings/get/', {})
          .then((response) => {
              console.log('/settings/get: ', response);
              setSettingsData(response.data)
          })
          .catch((error) => {
              console.log('/settings/get: ', error);
          });

      
  }

    authController(form:string, data:any) {
      // logout
      if(!form) {
          // if(!this.state.isRemember)
          window.localStorage.clear();
          this.setState({isLogin: null});
          return;
      }
      // const setID = (id: string) => this.setState({id: id});
      // login/register
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
              // if(response.data.user.remember) remember()
          })
          .catch(function (error) {
              console.log(`/auth/${form}: `, error);
          });

      const authReady = () => this.setState({isLogin: window.localStorage.getItem('token')});
      // const remember = () => this.setState({isRemember: !this.state.isRemember})
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
          Notifications: <Notifications notifications={this.props.notifications}
                                        notificationsController={this.notificationsController.bind(this)}
          />,

          Settings: <Settings selectController={this.selectController.bind(this)}
                              settingsSelected={this.state.settingsSelected}
                              settingsController={this.selectController.bind(this)}
          />,

          UserAccount: <UserAccount userData={this.props.profile}
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
      if(!key) {
          axios.post('http://localhost:4000/profile/update/', {
              "user": {
              "id": this.state.id,
                  "profile": {
                      ...this.state.profile
              }
          }
          })
              .then((response) => {
                  console.log('/profile/update: ', response);
              })
              .catch((error) => {
                  console.log('/profile/update: ', error)
              });
      }
      this.setState({
          profile: {
              ...this.state.profile,
              [key]: value
          }
      })
  }

  settingsController() {
      // axios.post('http://localhost:4000/settings/update/', {})
  }

    getTasks(id: string) {
        axios.post('http://localhost:4000/tasks/get/', {
            "id": id
        })
            .then((response) => {
                console.log('/tasks/get: ', response);
                this.setState({tasks: response})
            })
            .catch((error) => {
                console.log('/tasks/get: ', error)
            });
    }

   render() {
      return(
          <div className={style.App}>
              {
                  this.state.isLogin ?
                      <div>
                          <Navbar isLogin={this.state.isLogin}
                                  userName={this.state.profile.userName}
                                  avatar={this.props.profile.avatar}
                                  notifications={this.props.notifications.length}
                                  selectController={this.selectController.bind(this)}
                                  signOut={this.authController.bind(this)}
                          />
                          <div className={style.wrapper}>
                              <Sidebar isCollapsed={this.state.isCollapsed}
                                       viewController={this.viewController.bind(this)}
                                       SidebarItems={this.state.SidebarItems}
                                       selectController={this.selectController.bind(this)}
                                       moduleSelected={this.state.moduleSelected}
                              />
                              <DashBoard moduleSelected={this.state.moduleSelected}
                                         isCollapsed={this.state.isCollapsed}
                                         id={this.state.id}
                              />
                              {
                                  this.state.modalSelected !== null ?
                                      <div className={style.modal}>
                                          {this.openModal()}
                                      </div>
                                      :
                                      null
                              }
                              {/*{*/}
                              {/*    this.state.popupShow ?*/}
                              {/*        <Popup question={"Are you sure want to bla-bla-bla?"}*/}
                              {/*               yes={null}*/}
                              {/*               no={null}*/}
                              {/*        />*/}
                              {/*        :*/}
                              {/*        null*/}
                              {/*}*/}
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
        profile: state.coreReducer.profile,
        notifications: state.coreReducer.notifications,
        settings: state.coreReducer.settings,
    };
}, (dispatch) => {
    return {
        getProfileData(id: string) {
            dispatch({type: "GET_PROFILE_DATA", payload: {id: id, path: 'profile/get/', typed: "RECEIVED_PROFILE_DATA"} });
        },
        getNotificationsData(id: string) {
            dispatch({type: "GET_NOTIFICATIONS_DATA", payload: {id: id, path: 'notifications/get/', typed: "RECEIVED_NOTIFICATIONS_DATA"} });
        },
    }
})(App)
