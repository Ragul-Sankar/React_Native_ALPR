import React from 'react';
import { Text, View } from 'react-native';

const ListItem = (props) => {
    const { viewStyle, textStyle, first, second } = styles;
    const { title, value } = props

    return (
      <View style={viewStyle}>
        <Text style={[textStyle, first]}>{title} : </Text>
        <Text style={[textStyle, second]}>{value}</Text>
      </View>
    );
  };
  
  const styles = {
    viewStyle: {
      width: 500,
      borderBottomColor: 'lightgrey',
      borderBottomWidth: 1,
      paddingTop: 1,
      paddingBottom: 5,
      flexDirection: 'row',
    },
    textStyle: {
      fontSize: 16,
      color: 'black',
      marginLeft: 10,
    },
    first: {
      flex: 1
      // justifyContent: 'center',
    },
    second: {
      flex : 2
      // justifyContent: 'center',
    }
  };
  
  export default ListItem;