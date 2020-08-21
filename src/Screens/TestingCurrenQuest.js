import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import StyleSheet from '../Styles/mainStyle';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import {Ionicons} from '@expo/vector-icons';


export default class TestingCurrenQuest extends React.Component{
  
    constructor(props) {
        super(props);
        this.state={
            dialogVisible: false,
            count: 1,
            checked: 0,
            trigger: false,
            selected_answerTest: 0,
            all_ans: 0,
            disableButton: true
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
                <TouchableOpacity onPress={()=>{this.setState({checked: key, selected_answerTest: key,  trigger: true, disableButton: false})}} style={[StyleSheet.flex_row, StyleSheet.align_center, {padding: 20}]}>
                   <View style={StyleSheet.radioBtn}></View>
                   <Text style={{marginLeft: 15, color: 'white', fontSize: 16}}>{data}</Text>
                </TouchableOpacity>
                }
            </View>
        )

    };

    finishFunction = () => {
     
        let getParamQuestionResult = this.props.navigation.getParam('result');

        return(
            <ScrollView>
                <View style={[StyleSheet.just_center, StyleSheet.align_center, {marginVertical: 20}]}>
                
                    <Text style={{fontSize: 45, color: 'white', fontWeight: 'bold'}}>{this.state.all_ans}</Text>
                    <Text style={StyleSheet.title}>
                        Баллов
                    </Text>
                </View>
                <View style={{marginHorizontal: 15, backgroundColor: '#242424', padding: 35, borderRadius: 20}}>
                    {this.state.all_ans <= 12 ?
                      
                        <Text style={StyleSheet.text}>{getParamQuestionResult[0]}</Text>
                      
                    : this.state.all_ans >= 13 && this.state.all_ans <= 24?

                        <Text style={StyleSheet.text}>{getParamQuestionResult[1]}</Text>

                    : this.state.all_ans >= 25 && this.state.all_ans <= 36?

                        <Text style={StyleSheet.text}>{getParamQuestionResult[2]}</Text>

                    : this.state.all_ans >= 37 && this.state.all_ans <= 49 ?

                        <Text style={StyleSheet.text}>{getParamQuestionResult[3]}</Text>
                    :
                        <Text style={StyleSheet.text}>{getParamQuestionResult[4]}</Text>
                    }
                </View>
            </ScrollView>
           
        )
    }

    funcOnPress = () => {
     

        let getParamQuestionResult = this.props.navigation.getParam('test');
       

        console.log()
        
        this.setState(prevState => ({ 
            count: prevState.count + 1, 
            checked: 0,
            trigger: false,
            all_ans: prevState.all_ans + getParamQuestionResult[this.state.count]["scores"][this.state.selected_answerTest],
            disableButton: true
        }));
    
    
    }
      

    render(){
        let arrGetParams = [];

        let getParamQuestion = this.props.navigation.getParam('test');

        for (let key in getParamQuestion) {
            arrGetParams.push(getParamQuestion[key])
        }

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
                        onPress: () => this.props.navigation.navigate("Testing")
                    }}
                    negativeButton={{
                        title: "НЕТ",
                        onPress: () => this.setState({dialogVisible: false})
                    }}
               />
           
                    <TouchableOpacity onPress={() => this.setState({dialogVisible: true})} style={{paddingVertical: 15, borderBottomColor: "#525252", flexDirection: 'row', borderBottomWidth: 1, marginHorizontal: 10}}>
                            <Ionicons name='ios-arrow-back' size={28} color={"white"}/>
                            <Text style={[StyleSheet.title, {marginLeft: 20}]}>Завершить сейчас</Text>
                    </TouchableOpacity>
                     
                    {getParamQuestion[this.state.count] ?
                    <View>
                        <View style={[StyleSheet.align_end, {paddingHorizontal: 25, paddingTop: 25}]}>
                            <Text style={StyleSheet.title}>{getParamQuestion[this.state.count]["id"]} / {arrGetParams.length}</Text>
                        </View>
                        <View style={{ marginHorizontal:20, marginTop: 20, paddingHorizontal: 20, paddingTop: 30, paddingBottom: 30, backgroundColor: '#242424', borderRadius: 20}}>
                            <Text style={StyleSheet.title}>
                                { getParamQuestion[this.state.count]["questions"] }
                            </Text>
                        </View>
                    </View>
                        :
                        <View></View>
                    }

                    {getParamQuestion[this.state.count] ?
                        <ScrollView style={{paddingHorizontal: 25, paddingVertical: 15}}>
                            {getParamQuestion[this.state.count]["answers"].map((data, key) => this.renderRadioInput(data, key))}
                        </ScrollView>
                    :
                        this.finishFunction()
                    }

                    {getParamQuestion[this.state.count] ?
                       <View style={{width: '100%', height: '8%', alignItems: 'center', marginTop: 30, marginBottom: 40}}>
                          <TouchableOpacity style={[StyleSheet.butt, {backgroundColor: colorButton}]} onPress={this.funcOnPress} disabled={this.state.disableButton}>
                              <Text style={[StyleSheet.textBtn, {color: colorText}]}>Дать ответ</Text>
                          </TouchableOpacity>
                      </View>
                      :
                      <View style={{width: '100%', height: '8%', alignItems: 'center', marginTop: 10, marginBottom: 40}}>
                          <TouchableOpacity style={StyleSheet.butt} onPress={() => this.props.navigation.navigate("Testing")}>
                              <Text style={StyleSheet.textBtn}>Завершить</Text>
                          </TouchableOpacity>
                      </View>
                    }
            </View>
        )
    }
}