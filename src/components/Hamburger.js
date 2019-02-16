import React, { Component } from 'react';
import { withNavigation, DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class Hamburger extends Component {
    toggleDrawer = () => {
        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    }
    render() {
        return(
            <Icon name="bars" size={35} color="#fff" onPress={this.toggleDrawer} />
        );
    }
}

export default withNavigation(Hamburger);
