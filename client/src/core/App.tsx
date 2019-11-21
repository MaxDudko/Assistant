import React from 'react';
import style from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import DashBoard from "./components/DashBoard/DashBoard";
import Footer from "./components/Footer/Footer";

interface IState {
    isLogin: boolean,
    userName: string,
    isCollapsed: boolean,
    SidebarItems: any,
}

class App extends React.Component<{}, IState> {
  state: IState = {
      isLogin: true,
      userName: "Admin",
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
  };

  collapsed() {
      let collapsed = !this.state.isCollapsed;
      this.setState({isCollapsed: collapsed})
  }
  render() {
    return(
        <div className={style.App}>
            <Navbar isLogin={this.state.isLogin}
                    userName={this.state.userName}
            />
            <div className={style.wrapper}>
                <Sidebar isCollapsed={this.state.isCollapsed}
                         collapsed={this.collapsed.bind(this)}
                         SidebarItems={this.state.SidebarItems}
                />
                <DashBoard/>
            </div>
        </div>
    )
  }
}

export default App;
