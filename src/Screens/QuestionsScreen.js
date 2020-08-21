import React, { useState } from "react";
import {View, Text, Button, TouchableOpacity, TextInput, ScrollView, Image, Animated, Easing} from "react-native";
import StyleSheet from '../Styles/mainStyle';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import {Ionicons} from '@expo/vector-icons';


export default class QuestionsScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            dialogVisible: false,
            checked: 0,
            count: 1,
            selected_answer: "",
            all_selected_ans: [],
            all_true_ans: [],
            trigger: false,
            true_answer: "",
            num_point: 0,
            spinAnimTrig: new Animated.Value(0),
            disableButton: true,
            arrRandomQuestions: [],
            randomQuestNum: 0
        }
    
      }

      
    renderRadioInput = (data, key) => {
       
        return(
            <View key={key}>
                {this.state.checked == key && this.state.trigger?
                <TouchableOpacity style={[StyleSheet.flex_row, StyleSheet.align_center, {padding: 20}]}>
                   <View style={StyleSheet.radioBtn}>
                       <View style={StyleSheet.radioBtnInside_active}></View>
                   </View>
                    <Text style={{marginLeft: 15, color: 'white', fontSize: 16}}>{data}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={()=>{this.setState({checked: key, selected_answer: data, trigger: true, disableButton: false})}} style={[StyleSheet.flex_row, StyleSheet.align_center, {padding: 20}]}>
                   <View style={StyleSheet.radioBtn}></View>
                   <Text style={{marginLeft: 15, color: 'white', fontSize: 16}}>{data}</Text>
                </TouchableOpacity>
                }
            </View>
        )

    };

    componentDidMount(){
        let quest = this.props.navigation.getParam('quest');
     
      //---генерация случайных чисел---
        while (this.state.arrRandomQuestions.length < 15) {

            var randomNumber = Math.ceil(Math.random() * 25);
            var found = false;
            for (var i = 0; i < this.state.arrRandomQuestions.length; i++) {
                if (this.state.arrRandomQuestions[i] === randomNumber){
                    found = true;
                    break;
                }
            }
            if (!found) { 
                this.state.arrRandomQuestions[this.state.arrRandomQuestions.length]=randomNumber; 
            }
        }

        this.setState({
            count: this.state.arrRandomQuestions[0], 
            true_answer: quest[this.state.arrRandomQuestions[0]]["true_ans"]
        })

    
        
        Animated.loop(Animated.timing(
            this.state.spinAnimTrig,
          {
            toValue: 1,
            duration: 25000,
            easing: Easing.linear,
            useNativeDriver: true
          }
        )).start();
    }

  

    finishFunction = () => {
        let result = this.props.navigation.getParam('result');
        let salary = this.props.navigation.getParam('salary');
        let quest = this.props.navigation.getParam('quest');
      
        return(
            <ScrollView>
                <View style={[StyleSheet.just_center, StyleSheet.align_center, {marginVertical: 20}]}>
                
                    <Image width={80} height={80} source={require('../Images/finishScreen/finishIcon.png')}/>
                  
                    <Text style={{fontSize: 45, color: 'white', fontWeight: 'bold'}}>{this.state.num_point}</Text>
                    <Text style={StyleSheet.title}>
                        Баллов
                    </Text>
                    <View style={{width: '40%' , backgroundColor: 'white', height: 1, marginVertical: 10}}></View>
                    
                    {this.state.num_point <= 25 ?

                        <View style={{padding: 20, backgroundColor: '#242424', borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 18, color: '#36C555'}}>{result[0]}</Text>
                            <Text style={{color: 'white', marginTop: 15}}>{salary[0]}</Text>
                        </View>
                        : this.state.num_point >= 25 && this.state.num_point <= 45?

                        <View style={{padding: 20, backgroundColor: '#242424', borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 18, color: '#36C555'}}>{result[1]}</Text>
                            <Text style={{color: 'white', marginTop: 15}}>{salary[1]}</Text>
                        </View>

                        : this.state.num_point >= 45 && this.state.num_point <= 60?

                        <View style={{padding: 20, backgroundColor: '#242424', borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 18, color: '#36C555', textAlign: 'center'}}>{result[2]}</Text>
                           
                            <Text style={{color: 'white', marginTop: 15}}>{salary[2]}</Text>
                        </View>
                        :

                        <View style={{padding: 20, backgroundColor: '#242424', borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 18, color: '#36C555'}}>{result[3]}</Text>
                           
                            <Text style={{color: 'white', marginTop: 15}}>{salary[3]}</Text>
                        </View>
                    }
                  
                </View>

               
             
                <View style={{paddingHorizontal: 30}}>
                    {this.state.all_selected_ans.map((data, key) => {
                  
                        return(
                            <View key={key} style={{marginVertical: 10}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20}}>
                                    <View style={{width: '85%'}}>
                                    
                                        <Text style={{color: 'white', fontSize: 16}}>
                                             
                                            {key + 1}. {quest[this.state.arrRandomQuestions[key]] ? quest[this.state.arrRandomQuestions[key]]["quest"] : ""}
                                        </Text>
                                   
                                    
                                    </View>
                                    <View style={{width: '15%', alignItems: 'center'}}>
                                        {data == this.state.all_true_ans[key] ?
                                        <Text style={{fontSize: 25, color: '#36C555', fontWeight: 'bold'}}>+</Text>
                                        :
                                        <Text style={{fontSize: 25, color: '#D13434', fontWeight: 'bold'}}>-</Text>
                                        }
                                        
                                    </View>
                                </View>
                                <View style={{paddingVertical: 10}}>
                                    <Text style={{color: '#5C5C5C'}}>Ваш ответ:  {data}</Text>
                                </View>
                                <View style={{paddingVertical: 10, borderTopColor: '#858585', borderTopWidth: 1}}>
                                    <Text style={{color: '#5C5C5C'}}>Правильный ответ: {this.state.all_true_ans[key]}</Text>
                                </View>
                               
                            </View>
                        )
                    })}
                </View>
             
            </ScrollView>
           
        )
    }

    funcOnPress = () => {
      
        let quest = this.props.navigation.getParam('quest');
        
        this.setState(prevState => ({ 
            count: this.state.arrRandomQuestions[this.state.randomQuestNum + 1], 
            true_answer: quest[this.state.arrRandomQuestions[this.state.randomQuestNum + 1]] ? quest[this.state.arrRandomQuestions[this.state.randomQuestNum + 1]]["true_ans"] : "",
            checked: 0,
            trigger: false,
            disableButton: true,
            randomQuestNum: prevState.randomQuestNum + 1
        }));
       
        if(this.state.true_answer == this.state.selected_answer){
            this.setState(prevNum => ({ 
                num_point: prevNum.num_point + 5
            }))
        }else{
            this.setState(prevNum => ({ 
                num_point: prevNum.num_point + 0
            }))
        }
        this.state.all_selected_ans.push(this.state.selected_answer);
        this.state.all_true_ans.push(this.state.true_answer)
    }
      

  
    render(){
        let arrGetParams = [];

        let getParamQuestion = this.props.navigation.getParam('quest');

        for (let key in getParamQuestion) {
            arrGetParams.push(getParamQuestion[key])
        }
       
        const spin = this.state.spinAnimTrig.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        let colorButton = '#6F3DFF'
        let colorText = 'white'
        if(this.state.disableButton){
        
            colorButton = '#483F62'
            colorText= '#B3B3B3'
        }else{
            colorButton = '#6F3DFF'
            colorText= 'white'

        }

        return(
            <View style={StyleSheet.con}>
                   <ConfirmDialog
                    title="Уверены, что хотите выйти?"
                    message="Ваш результат будет обнулен"
                    visible={this.state.dialogVisible}
                    onTouchOutside={() => this.setState({dialogVisible: false})}
                    positiveButton={{
                        title: "ДА",
                        onPress: () => this.props.navigation.navigate("App")
                    }}
                    negativeButton={{
                        title: "НЕТ",
                        onPress: () => this.setState({dialogVisible: false})
                    }}
                    />

                    {getParamQuestion[this.state.count] ?
                        <View style={{paddingHorizontal: 20}}>
                            <TouchableOpacity onPress={() => this.setState({dialogVisible: true})} style={{paddingVertical: 15, borderBottomColor: "#525252", flexDirection: 'row', borderBottomWidth: 1, marginHorizontal: 10}}>
                                    <Ionicons name='ios-arrow-back' size={28} color={"white"}/>
                                    <Text style={[StyleSheet.title, {marginLeft: 20}]}>Завершить сейчас</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View></View>
                    }
                
               

                    {getParamQuestion[this.state.count] ? 

                        <ScrollView>
                             <View style={[StyleSheet.align_end, {paddingHorizontal: 25, paddingTop: 25}]}>
                                <Text style={StyleSheet.title}>{this.state.randomQuestNum + 1} / {this.state.arrRandomQuestions.length}</Text>
                            </View>
                            <View style={{ marginHorizontal:20, marginTop: 20, paddingHorizontal: 20, paddingTop: 30, paddingBottom: 30, backgroundColor: '#242424', borderRadius: 20}}>
                                <Text style={StyleSheet.title}>
                                    { getParamQuestion[this.state.count]["quest"] }
                                </Text>
                            </View>
                            <View style={{paddingHorizontal: 25, paddingVertical: 15}}>
                                {getParamQuestion[this.state.count]["all_ans"].map((data, key) => this.renderRadioInput(data, key))}
                            </View>
                        </ScrollView>
                        :
                        this.finishFunction()
                    }
                    
                    {getParamQuestion[this.state.count] ?
                        <View style={{position: 'absolute', width: 350, height: 350, top: '75%', left: '-25%', zIndex: -900}}>
                            <Animated.Image
                            style={{height:'100%', width: '100%',transform: [{rotate: spin}] }}
                            source={require('../Images/questions/background.png')} />
                        </View>
                        :
                        <View></View>
                    }
        
                    {getParamQuestion[this.state.count] ?
                        <View style={{width: '100%', height: '10%', alignItems: 'center', marginTop: 5, marginBottom: 15}}>
                            <TouchableOpacity style={[StyleSheet.butt, {backgroundColor: colorButton}]} onPress={this.funcOnPress} disabled={this.state.disableButton}>
                                <Text style={[StyleSheet.textBtn, {color: colorText}]}>Дать ответ</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{width: '100%', height: '10%', alignItems: 'center', marginTop: 5, marginBottom: 15}}>
                            <TouchableOpacity style={StyleSheet.butt} onPress={() => this.props.navigation.navigate("App")}>
                                <Text style={StyleSheet.textBtn}>Завершить</Text>
                            </TouchableOpacity>
                        </View>
                    }

            </View>
        )
    }
}