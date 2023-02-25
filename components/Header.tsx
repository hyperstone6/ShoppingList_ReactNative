/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import useStyle from '../styles';

const Header = () => {
  const {styles} = useStyle();
  return (
    <View style={styles.header} >
      <Text style={styles.Headertext} >Shopping List</Text>
    </View>
  );
};

export default Header;