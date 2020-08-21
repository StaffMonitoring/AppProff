import React from 'react';
import {View, Text, ScrollView, FlatList, Image, TouchableOpacity, ImageBackground} from "react-native";
import StyleSheet from '../../Styles/mainStyle';
import {Ionicons} from '@expo/vector-icons';

//const customData = require('../../../data/test.json');
const customDataMedical = require('../../../data/medical.json');
const customDataTourism = require('../../../data/tourism.json');
const customDataSpace = require('../../../data/space.json');
const customDataCreation = require('../../../data/creation.json');
const customDataPolitics = require('../../../data/politics.json');
const customDataTech = require('../../../data//tech.json');

//let arr = [];
let arrMedical = [];
let arrTourism = [];
let arrSpace = [];
let arrCreation = [];
let arrPolitics = [];
let arrTech = [];


for (let key in customDataTech) {
    arrTech.push(customDataTech[key])
}

for (let key in customDataMedical) {
    arrMedical.push(customDataMedical[key])
}

for (let key in customDataTourism) {
    arrTourism.push(customDataTourism[key])
}

for (let key in customDataSpace) {
    arrSpace.push(customDataSpace[key])
}

for (let key in customDataCreation) {
    arrCreation.push(customDataCreation[key])
}

for (let key in customDataPolitics) {
    arrPolitics.push(customDataPolitics[key])
}



export default class Content extends React.Component{
    
    //Здесь генерируются сами профессии
    getImage(img_name) {
        switch(img_name) {
          case "design.png": return require("../../Images/iconCategory/design.png");
          case "prog.png": return require("../../Images/iconCategory/prog.png");
          case "dentist.png": return require("../../Images/iconCategory/dentist.png");
          case "optometrist.png": return require("../../Images/iconCategory/optometrist.png");
          case "tourism.png": return require("../../Images/iconCategory/tourism.png");
          case "therapist.png": return require("../../Images/iconCategory/therapist.png");
          case "journalist.png": return require("../../Images/iconCategory/journalist.png");
          case "lawyer.png": return require("../../Images/iconCategory/lawyer.png");
          case "marketer.png": return require("../../Images/iconCategory/marketer.png");
        
        }
      }
 

    workingFunc = (itemWork) => {
        
 
        
        return(
            <TouchableOpacity  
              onPress={() => this.props.navigation.navigate('currentTest',{

                text: itemWork.desc,
                desc_more: itemWork.desc_more,
                questions: itemWork.questions,
                id: itemWork.id,
                result: itemWork.result,
                salary: itemWork.salary
              })}   
              style={{alignItems: 'center', width: '33%', marginVertical: 10}} key={itemWork.id}>
                <Image source={this.getImage(itemWork.img)} resizeMode='contain' style={{width: 115, height: 115}}/>
                <Text style={{color:'#9D9D9D', textAlign: 'center'}}>{itemWork.desc}</Text>  
            
               
            </TouchableOpacity>
        )
       
        
    }
  
  

    //Здесь генерируются название категорий
    renderItem = (item) => {
        let arrWork = []
       
        for (let key in item.work) {
            arrWork.push(item.work[key])
        }
     
     
        return(
            <View key={item.id}>
                <Text style={[StyleSheet.title, {marginTop: 25, fontWeight: 'bold'}]}>{item.name}</Text>  
                <View style={[StyleSheet.flex_row, {flexWrap: 'wrap'}]}>
                    {arrWork.map((itemWork) => this.workingFunc(itemWork))}
                </View>
        
            </View>
        )
       
  
    }

    render(){
        return(
            <View style={{paddingHorizontal: 20}}>
               {/* { arr.map((item) => this.renderItem(item))} */}
               { arrMedical.map((item) => this.renderItem(item))}
               { arrTourism.map((item) => this.renderItem(item))}
               { arrSpace.map((item) => this.renderItem(item))}
               { arrCreation.map((item) => this.renderItem(item))}
               { arrPolitics.map((item) => this.renderItem(item))}
               { arrTech.map((item) => this.renderItem(item))}
            </View>
           
        )
    }
}