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
    WidgetSelected: string,
    SettingsSelected: string | null,
    notifications: any,
    modalSelected: string | null,
    [key: string]: any

}

class App extends React.Component<{}, IState> {
  state: IState = {
      isLogin: false,
      isCollapsed: false,
      modalSelected: null,
      WidgetSelected: "DashBoard",
      SettingsSelected: null,
      user: data.user,
      SidebarItems: data.SidebarItems,
      notifications: data.notifications
  };

    componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://maxdudko.github.io/Assistant/animation.js";
        script.async = true;

        document.body.appendChild(script);
    }

  authController() {
      let login = !this.state.isLogin;
      this.setState({isLogin: login})
  }

  collapseController() {
      let collapsed = !this.state.isCollapsed;
      this.setState({isCollapsed: collapsed})
  }

  selectController(key: any, selected: string) {
      this.state[key] === selected ?
          this.setState({[key]: null})
          :
          this.setState({[key]: selected})
  }

  openModal() {
      let modal = this.state.modalSelected;
      const allModals: { [key: string]: any } = {
          Notifications: <Notifications notifications={this.state.notifications}/>,
          Settings: <Settings/>,
          UserAccount: <UserAccount user={this.state.user}/>,
      };
      if(modal === null) return;
      return allModals[modal];
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
                                       collapseController={this.collapseController.bind(this)}
                                       SidebarItems={this.state.SidebarItems}
                                       selectController={this.selectController.bind(this)}
                              />
                              <DashBoard WidgetSelected={this.state.WidgetSelected}
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
