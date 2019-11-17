import React from 'react';
import style from './App.module.scss';

const App: React.FC = () => {
  return (
    <iframe src="https://maxdudko.github.io/Assistant/"
            className={style.App}
            title="Assistant"
            frameBorder="0"
    />
  );
};

export default App;
