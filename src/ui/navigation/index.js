import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Settings} from '../../common/constants/setttings';
import {Colors} from '../styles/colors';

import LaunchScreen from '../screens/launch_screen';
import MainScreen from '../screens/main_screen';
import AddPhoneScreen from '../screens/add_phone_screen/add_phone_screen';
import DetailScreen from '../screens/detail_screen/detail_screen';
import EditScreen from '../screens/edit_screen/edit_screen';

import Header from './components/header';
import BackButton from './components/back_button';

const RootStack = createStackNavigator();

import {usePhoneContext} from '../context/phone_context';

const standardHeaderStyles = {
  elevation: 0, // remove shadow on Android
  shadowOpacity: 0, // remove shadow on iOS
};

const Navigation = () => {

  const {selectedPhone} = usePhoneContext();

  useEffect(() => {
    if (!Settings.isIos) {
      BackHandler.addEventListener('hardwareBackPress', () => {
        // let currentStack = NavigationService.getCurrentRoute();

        // const {routes, index} = currentStack.state;
        // const currentRoute = routes[index];
        // const {name} = currentRoute;
        // const mainScreen = [];

        // if (mainScreen.includes(name)) {
        //   BackHandler.exitApp();
        //   return false;
        // }
        // return true;
      });
    }

    return () => {
      if (!Settings.isIos) {
        BackHandler.removeEventListener('hardwareBackPress');
      }
    };
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={'LaunchScreen'}
        screenOptions={{
          gestureEnabled: false,
          cardStyle: {
            backgroundColor: Colors.white,
          },
        }}
      >
        <RootStack.Screen name={'LaunchScreen'} component={LaunchScreen} options={{headerShown: false}} />
        <RootStack.Screen name={'MainScreen'} component={MainScreen} options={{headerShown: false}} />
        <RootStack.Screen
          name={'AddPhoneScreen'}
          component={AddPhoneScreen}
          options={({navigation}) => ({
            headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
            headerTitle: () => <Header back title={'New Phone Form'} />,
            headerStyle: standardHeaderStyles,
          })}
        />
        <RootStack.Screen
          name={'DetailScreen'}
          component={DetailScreen}
          options={({navigation}) => ({
            headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
            headerTitle: () => <Header back title={`${selectedPhone.name}`} />,
            headerStyle: standardHeaderStyles,
          })}
        />
        <RootStack.Screen
          name={'EditScreen'}
          component={EditScreen}
          options={({navigation}) => ({
            headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
            headerTitle: () => <Header back title={`${selectedPhone.name}`} />,
            headerStyle: standardHeaderStyles,
          })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
