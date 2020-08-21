import React from 'react';
import {View, Text} from "react-native";
import StyleSheet from '../Styles/mainStyle'

export default class SettingsScreen extends React.Component{
  

    render(){
        return(
            <View style={StyleSheet.con}>
                <Text style={{color: 'white'}}>Settings</Text>
            </View>
        )
    }
}