import React from 'react';
import logo from '../logo.png';
import style from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className={style.AppHeader}>
        <h1>Assistant</h1>
        <img src={logo} className={style.AppLogo} alt="logo" />
        <p>
          Virtual Assistant with many useful functions...
        </p>
        <a
          className={style.AppLink}
          href="https://github.com/MaxDudko/Assistant"
          target="_blank"
          rel="noopener noreferrer"
        >
          Work in Progress...
        </a>
      </header>
    </div>
  );
};

export default App;
