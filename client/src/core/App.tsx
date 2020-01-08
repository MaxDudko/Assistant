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
import {IReduxState} from "../store/reducers";

interface IState {
    isLogin: string | null,

    SidebarItems: any,
    [key: string]: any

}

interface IProps {
    id: string,
    setID: any,
    getProfileData: any,
    getNotificationsData: any,
    modalSelected: string | null,
}

class App extends React.Component<IProps, IState> {
  state: IState = {
      isLogin: window.localStorage.getItem('token'),

      SidebarItems: data.SidebarItems,
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

  // selectController(key: any, selected: string) {
  //     if(key === "modalSelected") {
  //         this.state[key] === selected ?
  //             this.setState({[key]: null})
  //             :
  //             this.setState({[key]: selected})
  //     } else {
  //         this.setState({[key]: selected})
  //     }
  // }

  openModal() {
      let modal = this.props.modalSelected;

      const allModals: { [key: string]: any } = {
          Notifications: <Notifications />,

          Settings: <Settings />,

          UserAccount: <UserAccount />,

      };

      if(modal === null) return;
      return allModals[modal];
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
                          <Navbar isLogin={this.state.isLogin} />
                          <div className={style.wrapper}>
                              <Sidebar SidebarItems={this.state.SidebarItems}/>
                              <DashBoard id={this.props.id}
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
                      <Authentication />
              }
          </div>
      )
  }
}


export default connect((state: IReduxState) => {
    return {
        id: state.auth.id,
        modalSelected: state.common.modalSelected,
    };
}, (dispatch) => {
    return {
        // authController(form: string, data: {[key: string]: string}) {
        //     dispatch({
        //         type: "AUTH_CONTROLLER",
        //         payload: {}
        //     })
        // },
        setID(id: string) {
            dispatch({
                type: "SET_ID",
                payload: {
                    id: id,
                }
            })
        },
        getProfileData(id: string) {
            dispatch({
                type: "GET_PROFILE_DATA",
                payload: {
                    id: id,
                    path: '/profile/get/',
                    typed: "RECEIVED_PROFILE_DATA"
                }
            });
        },
        getNotificationsData(id: string) {
            dispatch({
                type: "GET_NOTIFICATIONS_DATA",
                payload: {
                    id: id,
                    path: '/notifications/get/',
                    typed: "RECEIVED_NOTIFICATIONS_DATA"
                }
            });
        },
    }
})(App)
