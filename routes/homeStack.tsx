/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Intro from '../Intro';
import App from '../App';

const screens = {
  Intro: {
    screen: Intro,
  },
  App: {
    screen: App,
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
