/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import useStyle from './styles';

const Intro = () => {
    const {styles} = useStyle();

    return (
    <View style={styles.intro}>
      <Text>Welcome!</Text>
      <Text>Welcome!</Text>
      <Text>Welcome!</Text>
      <Text>Welcome!</Text>
      <Text>Welcome!</Text>
      <Text>Welcome!</Text>
      <Text>Welcome!</Text>
      <Text>Welcome!</Text>
      <Text>Welcome!</Text>
      <Text>Welcome!</Text>
    </View>
  );
};

export default Intro;
