/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {TextInput, SafeAreaView, Button} from 'react-native';
import useStyle from '../styles';

const AddTodo = ({handleAddTodo}) => {
  const [text, setText] = useState('');

  const {styles} = useStyle();

  const handlePress = () => {
    handleAddTodo(text);
    setText('');
  };
  return (
    <SafeAreaView style={styles.input}>
      <TextInput
        value={text}
        onChangeText={value => setText(value)}
        placeholder="What do you want to buy?"
        placeholderTextColor={'#ddd'}
        style={styles.textInput}
      />
      <Button
        title="add to list"
        onPress={handlePress}
        color={styles.buttonColor.color}
      />
    </SafeAreaView>
  );
};

export default AddTodo;
