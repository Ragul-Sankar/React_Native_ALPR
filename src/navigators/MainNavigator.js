import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

import CameraScreen from '../screens/CameraScreen';

import SideMenu from '../components/SideMenu';
import Hamburger from '../components/Hamburger';

const DrawerStack = createDrawerNavigator(
  {
    Home: HomeScreen, 
    
    Camera: CameraScreen,
    
  },
  {
    initialRouteName: 'Home',
    contentComponent: SideMenu,
  }
);

const DrawerNavigation = createStackNavigator(
  {
    DrawerStack: DrawerStack,
  },
  {
    headerMode: 'screen',
    headerLayoutPreset: 'left',
    navigationOptions: {
      title: 'test',
      headerLeft: <Hamburger />,
      headerLeftContainerStyle: {
        paddingLeft: 10,
      },
      headerStyle: {
        backgroundColor: '#4FB1F2',
      },
      headerTintColor: '#fff',
    }
  }
);

DrawerStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  return {
      headerTitle,
  };
};

export default class MainNavigator extends React.Component {
  render() {
    return <DrawerNavigation />;
  }
}
