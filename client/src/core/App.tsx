import React from 'react';
import style from './App.module.scss';

import Authentication from "./components/Authentication/Authentication";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import DashBoard from "./components/DashBoard/DashBoard";
import Notifications from "./components/Notifications/Notifications";
import Settings from "./components/Settings/Settings";
import UserAccount from "./components/UserAccount/UserAccount";

import data from "./App.data";

interface IState {
    isLogin: boolean,
    user: any,
    isCollapsed: boolean,
    SidebarItems: any,
    moduleSelected: string,
    settingsSelected: string | null,
    notifications: any,
    modalSelected: string | null,
    [key: string]: any

}

class App extends React.Component<{}, IState> {
  state: IState = {
      isLogin: true,
      isCollapsed: false,
      modalSelected: null,
      moduleSelected: "DashBoard",
      settingsSelected: null,
      user: data.user,
      SidebarItems: data.SidebarItems,
      notifications: data.notifications
  };

  authController(form:string, data:any) {
      // API(auth) => if(true) => setState()
      this.setState({isLogin: !this.state.isLogin})
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
          UserAccount: <UserAccount user={this.state.user}
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
          user: {
              ...this.state.user,
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
                                  userName={this.state.user.userName}
                                  avatar={this.state.user.avatar}
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
