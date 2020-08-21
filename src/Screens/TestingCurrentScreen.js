import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import StyleSheet from '../Styles/mainStyle';
import {Ionicons} from '@expo/vector-icons';

export default class TestingCurrentScreen extends React.Component{
  

    render(){
        let getParamQuestion = this.props.navigation.getParam('text');
       
        return(
            <View style={StyleSheet.con}>
                <View>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("Testing")} style={{paddingVertical: 15, borderBottomColor: "#525252", flexDirection: 'row', borderBottomWidth: 1, marginHorizontal: 10}}>
                        <Ionicons name='ios-arrow-back' size={28} color={"white"}/>
                        <Text style={[StyleSheet.title, {marginLeft: 20}]}>Назад</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={StyleSheet.con}>
                    <View style={{ marginHorizontal:20, paddingHorizontal: 20, paddingTop: 30, paddingBottom: 100, backgroundColor: '#242424', borderRadius: 20}}>
                        <Text style={StyleSheet.textBtn}>{getParamQuestion}</Text>
                    </View>

                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: -30}}>
                        <TouchableOpacity 
                            style={StyleSheet.butt} 
                            onPress={()=> this.props.navigation.navigate("currentQuest", {
                                test: this.props.navigation.getParam('test'),
                                result: this.props.navigation.getParam('result')
                            })}>
                            <Text style={StyleSheet.textBtn}>Вперед</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
           
        )
    }
}