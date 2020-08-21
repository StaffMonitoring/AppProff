import React from 'react';
import {View, Text, Animated, Easing} from "react-native";
import StyleSheet from '../Styles/mainStyle';
import Testing from '../Components/testing/testing';
import Header from '../Components/header/header';

export default class TestingScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state={
          
            spinAnimTrigTest: new Animated.Value(0),
          
        }
    
      }
    componentDidMount(){
        
        Animated.loop(Animated.timing(
            this.state.spinAnimTrigTest,
          {
            toValue: 1,
            duration: 25000,
            easing: Easing.linear,
            useNativeDriver: true
          }
        )).start();
    }

    render(){
        const spin = this.state.spinAnimTrigTest.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return(
            <View style={StyleSheet.con}>
                <Header/>
                <Testing navigation={this.props.navigation}/>
                <View style={{position: 'absolute', width: 350, height: 350, top: '75%', right: '-25%', zIndex: -900}}>
                    <Animated.Image
                    style={{height:'100%', width: '100%',transform: [{rotate: spin}] }}
                    source={require('../Images/questions/background.png')} />
                </View>
            </View>
        )
    }
}