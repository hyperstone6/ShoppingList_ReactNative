/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {StyleSheet, useWindowDimensions} from 'react-native';

const useStyle = (opacity = 0) => {
  const {width} = useWindowDimensions();
  
  const styles = StyleSheet.create({
    intro: {
      // flex:1,
      // alignItems: 'center',
      // justifyContent: 'center',
      // fontSize: 30,
      // backgroundColor: 'gold',
      // color: '#000',
    },
    container: {
      flex: 1,
    },
    appContainer: {
      flex: 1,
      opacity: opacity,
      backgroundColor: '#1e1531',
    },
    header: {
      height: 75,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#352750',
    },
    Headertext: {
      fontFamily: 'BrandonGrotesque-Regular',
      fontSize: 34,
      // fontWeight: 'bold',
      color: 'white',
    },
    body: {
      flex: 3,
      margin: 10,
      padding: 10,
    },
    input: {
      marginBottom: 15,
      // flex: 1,
    },
    textInput: {
      fontFamily: 'BrandonGrotesque-Regular',
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 10,
      marginBottom: 10,
      paddingHorizontal: 10,
      flex: 1,
      minHeight: 50,
      backgroundColor: '#352750',
      color: '#fff',
      fontSize: 16,
    },
    lists: {
      flex: 1,
      marginTop: 40,
    },
    listItem: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#352750',
      padding: 20,
      borderRadius: 10,
      marginBottom: 10,
    },
    listText: {
      fontFamily: 'BrandonGrotesque-Regular',
      // fontWeight: 'bold',
      fontSize: 22,
      color: '#fff',
    },
    strikeText: {
      // fontFamily: 'BrandonGrotesque Regular',
      color: '#aaa',
      fontSize: 20,
      fontStyle: 'italic',
      textDecorationLine: 'line-through',
    },
    buttonColor: {
      color: '#352750',
    },
    modalImage: {
      width: '100%',
      height: '100%',
    },
    modalText: {
      fontFamily: 'BrandonGrotesque-Regular',
      fontSize: 35,
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: [{translateY: -50}, {translateX: -100 }],
      color: '#FFF',
      textShadowOffset: {width: -1, height: 0},
      textShadowColor: 'black',
      textShadowRadius: 10,
    },
  });
  return {styles};
};

export default useStyle;
