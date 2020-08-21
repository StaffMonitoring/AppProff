import React from 'react';
import {View, Text, Button, TouchableOpacity} from "react-native";
import StyleSheet from '../../Styles/mainStyle';
import {Ionicons} from '@expo/vector-icons';

export default class Warning extends React.Component{
  

    render(){
    
        return(
            <View style={{ marginHorizontal:20, marginTop: 20, paddingHorizontal: 20, paddingTop: 30, paddingBottom: 100, backgroundColor: '#242424', borderRadius: 20}}>
               <Text style={[StyleSheet.textBtn, {marginVertical: 15}]}>Максимальное количество баллов</Text>
               <Text style={[StyleSheet.textBtn, {marginVertical: 15}]}>Минимальное:</Text>
               <Text style={StyleSheet.textBtn}>{this.props.desc}</Text>
               <Text style={StyleSheet.textBtn}>because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</Text>
            </View>
        )
    }
}