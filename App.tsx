/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Alert,
  Keyboard,
  Modal,
  TouchableWithoutFeedback,
  Image,
  Text,
} from 'react-native';
import useStyle from './styles';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

const App = () => {
  const [opacity, setOpacity] = useState(0);
  const {styles} = useStyle(opacity);

  const [todo, setTodo] = useState([]);
  const [modalView, setModalView] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setModalView(false);
      setOpacity(1);
    }, 3000);
  }, []);

  const strikethrough = (id: number) => {
    setTodo(prevTodo => {
      return prevTodo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            strike: !item.strike,
          };
        } else {
          return item;
        }
      });
    });
  };

  const deleteTodo = (id: number) => {
    setTodo(prevTodo => prevTodo.filter(item => item.id !== id));
  };

  const handleAddTodo = (text: string) => {
    if (text.length < 3) {
      return Alert.alert('Too Short', 'Item must be at least 3 chars long');
    } else {
      setTodo(prevTodo => {
        return [{name: text, id: Math.random(), strike: false}, ...prevTodo];
      });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Modal visible={modalView} animationType="fade">
          <Image style={styles.modalImage} source={require('./assets/images/background.jpg')} />
          <Text style={styles.modalText}>Shopping List</Text>
        </Modal>
      </View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.appContainer}>
          <Header />
          <SafeAreaView style={styles.body}>
            <Todos
              todo={todo}
              deleteTodo={deleteTodo}
              strikethrough={strikethrough}
            />
            <AddTodo handleAddTodo={handleAddTodo} />
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default App;
