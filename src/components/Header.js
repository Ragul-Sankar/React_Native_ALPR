import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle, viewStyle2 } = styles;

  return (
    <View style={viewStyle}>
      <View style={viewStyle2}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#4FB1F2',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 55,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row',
  },
  viewStyle2: {
    flex: 2,
  },
  textStyle: {
    fontSize: 20,
    color: 'white'
  },
  iconStyle: {
    width: 30,
    height: 30,
    color: 'white',
    flex: 1,
  }
};

export default Header;
