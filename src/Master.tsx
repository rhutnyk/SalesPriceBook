import * as React from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import Home from './pages/home/home';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class Master extends React.Component {

    state = {
        selectedIndex: 0,
    };

    select = (index: number) => this.setState({ selectedIndex: index });

    render() {
        return (
            <div className="App">
                <Tabs>
                    <Tab icon={<FontIcon className="material-icons">store</FontIcon>} />
                    <Tab icon={<ActionFlightTakeoff />} />
                    <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>} />
                </Tabs>
                <Home/>                
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
            </div>
        );
    }

}

export default Master;