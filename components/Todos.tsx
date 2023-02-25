/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import useStyle from '../styles';

const Todos = ({todo, deleteTodo, strikethrough}) => {
  const {styles} = useStyle();

  return (
    <View style={styles.lists}>
      <FlatList
        data={todo}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => strikethrough(item.id)}>
            <Text style={item.strike ? styles.strikeText : styles.listText}>
              {item.name}
            </Text>
            <Icon
              onPress={() => deleteTodo(item.id)}
              name="trash"
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Todos;
