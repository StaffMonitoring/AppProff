import React from 'react';
import {View, Text, ScrollView, Animated, Easing} from "react-native";
import StyleSheet from '../Styles/mainStyle';
import Header from '../Components/header/header';
import Slider from '../Components/slider/slider';
import Content from '../Components/content/content';

export default class MainScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            spinAnim: new Animated.Value(0),
            search: []
        }
    
      }


    componentDidMount(){
      
        Animated.loop(Animated.timing(
          this.state.spinAnim,
          {
            toValue: 1,
            duration: 25000,
            easing: Easing.linear,
            useNativeDriver: true
          }
        )).start();
    }


    render(){
        const spin = this.state.spinAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return(
            <View style={StyleSheet.con}>
                <Header search={this.state.search}/>
                {/* Стиливой компонент */}
        
                <View style={{position: 'absolute', width: 370, height: 370, top: '35%', right: '-45%', zIndex: -900}}>
                    <Animated.Image
                    style={{height:'100%', width: '100%',transform: [{rotate: spin}] }}
                    source={require('../Images/questions/backgroundMain.png')} />
                </View>

                <ScrollView style={{height: '92%', paddingTop: 10}}>
                    <Slider navigation={this.props.navigation}/>
                    <Content navigation={this.props.navigation} search={this.state.search}/>
                </ScrollView>
              
            </View>
        )
    }
}