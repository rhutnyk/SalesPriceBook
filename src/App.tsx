import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import './App.css';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class App extends React.Component {
  state = {
    selectedIndex: 0,
  };

  select = (index: number) => this.setState({ selectedIndex: index });

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Tabs>
            <Tab icon={<FontIcon className="muidocs-icon-action-home" />} />
            <Tab icon={<ActionFlightTakeoff />} />
            <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>} />
          </Tabs>
          <p className="App-intro">
          <FontIcon className="material-icons">help</FontIcon>
          <FontIcon className="material-icons">favorite</FontIcon>
          <FontIcon className="muidocs-icon-action-home" />
          <i className="material-icons">face</i>
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          <div>
            <RaisedButton label="Default" />
          </div>
        </div>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </MuiThemeProvider>
    );
  }
}

export default App;
