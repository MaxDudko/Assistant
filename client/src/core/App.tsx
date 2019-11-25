import React from 'react';
import style from './App.module.scss';
import Authentication from "./components/Authentication/Authentication";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import DashBoard from "./components/DashBoard/DashBoard";
import Notifications from "./components/Notifications/Notifications";
import Settings from "./components/Settings/Settings";
import UserAccount from "./components/UserAccount/UserAccount";

interface IState {
    isLogin: boolean,
    user: any,
    isCollapsed: boolean,
    SidebarItems: any,
    WidgetSelected: string,
    SettingsSelected: string | null,
    notifications: any,
    modal: string | null,
    [key: string]: any

}

class App extends React.Component<{}, IState> {
  state: IState = {
      isLogin: false,
      user: {
          id: 1,
          userName: "Max",
          firstName: "Max",
          lastName: "Dudko",
          birthday: "24.10.1991",
          location: "Ukraine, ZP-City",
          avatar: "https://media.licdn.com/dms/image/C4D03AQFI1XZ240JlXg/profile-displayphoto-shrink_100_100/0?e=1579737600&v=beta&t=JydIeQO26Zq4YkQlwx0Zwfml-g0MoEc3-8_hg9P-O_I",
          email: "max2410zp@gmail.com"
      },
      modal: null,
      isCollapsed: false,
      SidebarItems: [
          {
              name: "DashBoard",
              icon: "faCheck"
          },
          {
              name: "Contacts",
              icon: "faPlus"
          },
          {
              name: "Task List",
              icon: "faCheck"
          },
          {
              name: "Calendar",
              icon: "faPlus"
          },
          {
              name: "Notifications",
              icon: "faCheck"
          }
      ],
      WidgetSelected: "DashBoard",
      SettingsSelected: null,
      notifications: [
          {
              title: "Welcome",
              from: "Assistant",
              to: "Max",
              date: "22.11.2019 12:00",
              text: "Welcome to Assistant!!! Glad to see you here 😊😊😊"
          },
          {
              title: "About",
              from: "Assistant",
              to: "Max",
              date: "22.11.2019 14:10",
              text: `All what you need in one application... Personal dashboard with convenient customizable interface, include: customizable interface options, different widgets: to-do-list, calendar, weather, news, social networks, payment, etc... notifications, data storage, etc... Docs: https://docs.google.com/document/d/133I9VMq4_CGjn6BMtMuWr7puimJ9lBa3fbLjTqe1pJs/edit Repository: https://github.com/MaxDudko/Assistant`
          },
          {
              title: "Lorem Ipsum",
              from: "Lorem Fish",
              to: "Max",
              date: "22.11.2019 16:25",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
      ]
  };

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
      let modal = this.state.modal;
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
                                  this.state.modal !== null ?
                                      <div className={style.modal}>
                                          {this.openModal()}
                                      </div>
                                      :
                                      null
                              }
                          </div>
                      </div>
                          :
                      <Authentication/>
              }
          </div>
      )
  }
}

export default App;
