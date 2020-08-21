import React from 'react';
import {View, Text, ScrollView, Image, ImageBackground, TouchableOpacity} from "react-native";
import StyleSheet from '../../Styles/mainStyle';
import {Ionicons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



export default class Slider extends React.Component{
  

    render(){
        return(
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={[StyleSheet.radius_10, StyleSheet.margin_7, {width: 270, height: 180}]} onPress={() => this.props.navigation.navigate('Testing')}>
                    <ImageBackground source={require("../../Images/slider/1.jpg")} imageStyle={{borderRadius: 10}} style={{width: '100%', height: '100%'}}>
                        <View style={{padding: 15}}>
                            <Text style={StyleSheet.title}>
                                Не знаете кем хотите быть? 
                            </Text>
                            <Text style={StyleSheet.text}>
                               Пройдите наши тесты на профориентацию
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={[StyleSheet.radius_10, StyleSheet.margin_7, {width: 270, height: 180}]}>
                    <ImageBackground source={require("../../Images/slider/2.jpg")} imageStyle={{borderRadius: 10}} style={{width: '100%', height: '100%'}}>
                        <View style={{padding: 15}}>
                            <Text style={StyleSheet.text}>
                                sit voluptatem accising pain was born and tium
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={[StyleSheet.radius_10, StyleSheet.margin_7, {width: 270, height: 180}]}>
                    <ImageBackground source={require("../../Images/slider/3.jpg")} imageStyle={{borderRadius: 10}} style={{width: '100%', height: '100%'}}>
                        <View style={{padding: 15}}>
                            <Text style={StyleSheet.text}>
                                ising pain was born and 
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={[StyleSheet.radius_10, StyleSheet.margin_7, {width: 270, height: 180}]}>
                    <ImageBackground source={require("../../Images/slider/4.jpg")} imageStyle={{borderRadius: 10}} style={{width: '100%', height: '100%'}}>
                        <View style={{padding: 15}}>
                            <Text style={StyleSheet.text}>
                                sit voluptatemm
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                
    
            </ScrollView>
        )
    }
}