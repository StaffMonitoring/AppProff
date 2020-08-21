import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'
import {createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

//-----импорт экранов-----
import MainScreen from '../Screens/MainScreen'
import TestingScreen from '../Screens/TestingScreen'
import SettingsScreen from '../Screens/SettingsScreen'
import CurrentTestScreen from '../Screens/CurrentTestScreen'
import QuestionsScreen from '../Screens/QuestionsScreen'
import TestingCurrentScreen from '../Screens/TestingCurrentScreen'
import TestingCurrenQuest from '../Screens/TestingCurrenQuest'

//-----нижнее меню-----
const AppTabNavigator = createBottomTabNavigator(
  {
    Main:{
      screen: MainScreen,
      navigationOptions:{
        title: "Главная",
        tabBarIcon: ({tintColor}) => <Ionicons name='ios-home' size={28} color={tintColor}/>
      }
    },

    Testing:{
      screen: TestingScreen,
      navigationOptions:{
        title: "Тесты",
        tabBarIcon: ({tintColor}) => <Ionicons name='ios-chatboxes' size={28} color={tintColor}/>
      }
    },

    Settings:{
      
      screen: SettingsScreen,
  
      navigationOptions:{
        title: "Ещё",
        tabBarIcon: ({tintColor}) => <Ionicons name='ios-settings' size={28} color={tintColor}/>
      }
    },

  },
  {
    tabBarOptions:{
      activeTintColor: "white",
      inactiveTintColor: "#A5A5A5",
     
      style: {
          backgroundColor: '#262626',
          paddingTop: 5,
          borderTopWidth: 0
      },
    }
  }
)



const StackNav = createStackNavigator(
  {
    currentTest: CurrentTestScreen,
    questionCp: QuestionsScreen
  },

  {
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: false
    }
  }

)



const StackNavTesting = createStackNavigator(
  {
    currentTesting: TestingCurrentScreen,
    currentQuest: TestingCurrenQuest
  },

  {
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: false
    }
  }

)
  
export const AppNavigator =  createSwitchNavigator(
  {

    App: AppTabNavigator,
    currTesting: StackNav,
    testingProff: StackNavTesting
  },
  { 
    initialRouteName: "App",
   
  },
 
 

)