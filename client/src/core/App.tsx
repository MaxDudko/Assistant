import React from 'react';
import style from './App.module.scss';

interface IState {}

class App extends React.Component<{}, IState> {
  state: IState = {};

  render() {
    return(
        <div className={style.App}>
            <iframe src="https://maxdudko.github.io/Assistant/"
                    className={style.App}
                    title="Assistant"
                    frameBorder="0"
                    style={{
                        width: "100%",
                        height: "99.5vh",
                        margin: "0",
                        padding: "0",
                    }}
            />
        </div>
    )
  }
}

export default App;
