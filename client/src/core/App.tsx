import React from 'react';
import style from './App.module.scss';

import Navbar from "./components/Navbar/Navbar";
import DashBoard from "./components/DashBoard/DashBoard";
import Sidebar from "./components/Sidebar/Sidebar";

interface IState {
  
}

class App extends React.Component<{}, IState> {
  state: IState = {};

  render() {
    return(
        <div className={style.App}>
          <Navbar/>
            <div className={style.wrapper}>
                <Sidebar/>
                <DashBoard/>
            </div>
        </div>
    )
  }
}

export default App;
