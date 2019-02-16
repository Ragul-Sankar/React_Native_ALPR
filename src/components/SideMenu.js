import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
        routeName: route,
        title: 'test2'
    });
    this.props.navigation.dispatch(navigateAction);
  }
  
  render () {
    const { containerStyle, viewStyle, textStyle, iconStyle } = styles;
    return (
        <ScrollView style={containerStyle}>
            <View>
                <TouchableHighlight onPress={this.navigateToScreen('Home')}>
                    <View style={viewStyle}>
                        <Icon name="home" size={35} color="#fff" style={iconStyle} />
                        <Text style={textStyle}>Home</Text>
                    </View>
                </TouchableHighlight>
            </View>
            
            <View>
                <TouchableHighlight onPress={this.navigateToScreen('Camera')}>
                    <View style={viewStyle}>
                        <Icon name="camera" size={35} color="#fff" style={iconStyle} />
                        <Text style={textStyle}>Camera</Text>
                    </View>
                </TouchableHighlight>
            </View>
            
        </ScrollView>
      );
  }
};

SideMenu.propTypes = {
    navigation: PropTypes.object
};

const styles = {
    containerStyle: {
        backgroundColor: '#f5f5f5',
    },
    viewStyle: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#4FB1F2',
        marginBottom: 4,
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
    },
    textStyle: {
        color: '#fff',
        flex: 2,
        fontSize: 30,
    },
    iconStyle: {
        flex: 1,
    }
}
