import React from 'react';
import {View, Text, ScrollView, ImageBackground, TouchableOpacity} from "react-native";
import StyleSheet from '../../Styles/mainStyle'

const customData = require('../../../data/testingScreen/testing.json');
const customAccountant = require('../../../data/testingScreen/accountant.json');
const customCosmonaut = require('../../../data/testingScreen/cosmonaut.json');


let arr = [];
let arrAccountant = [];
let arrCosmonaut = [];

for (let key in customData) {
    arr.push(customData[key])
}
for (let key in customAccountant) {
    arrAccountant.push(customAccountant[key])
}
for (let key in customCosmonaut) {
    arrCosmonaut.push(customCosmonaut[key])
}
export default class Testing extends React.Component{

    getImage(img_name) {
        switch(img_name) {
          case "prog.png": return require("../../Images/slider/1.jpg");
        }
      }
 
    
    renderItem = (item) => {
        return(
            <TouchableOpacity  
              onPress={() => this.props.navigation.navigate('currentTesting',{
                text: item.description,
                test: item.test,
                result: item.result
              })}   
              key={item.id}
              style={{alignItems: 'center', width: '50%', padding: 5, height: 150}} key={item.id}>
              <ImageBackground imageStyle={{borderRadius: 10}} style={{width: '100%', height: '100%'}} source={this.getImage(item.image)} >
                    <Text style={{color:'#fff', padding:15}}>{item.name}</Text>  
              </ImageBackground>
        
            </TouchableOpacity>
        )
       
        
    }

    render(){

        return(
            <ScrollView style={{padding: 15}}>
                <Text style={[StyleSheet.title, {marginBottom: 20, marginTop: 20}]}>Тесты на профориентацию</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {arr.map((item) => this.renderItem(item))}
                    {arrAccountant.map((item) => this.renderItem(item))}
                    {arrCosmonaut.map((item) => this.renderItem(item))}
                </View>
            
            </ScrollView>
        )
    }
}