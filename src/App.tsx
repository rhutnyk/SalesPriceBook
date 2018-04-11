import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '!!style-loader!css-loader!material-design-icons/iconfont/material-icons.css';
import './App.css';

import Master from './Master';

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <Master/>
      </MuiThemeProvider>
    );
  }
}

export default App;
