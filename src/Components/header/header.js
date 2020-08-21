import React from 'react';
import {View, Text, ActivityIndicator} from "react-native";
import StyleSheet from '../../Styles/mainStyle';
import {Ionicons} from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';

export default class Header extends React.Component{


    render(){

        return(
            
            <View style={[StyleSheet.padding_vert_10, StyleSheet.flex_row, StyleSheet.align_center,StyleSheet.padding_hor_10, {height: '8%'}]}>
                <View style={[StyleSheet.search, StyleSheet.width_90_proc]}>
                  
                </View>
                <View style={[StyleSheet.width_10_proc, StyleSheet.align_center, StyleSheet.just_center]}>
                    <Ionicons name='ios-bookmark' size={25} color={'white'}/>
                </View>
            </View>
        )
   
    }
}