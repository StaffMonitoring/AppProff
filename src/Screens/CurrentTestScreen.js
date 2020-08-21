import React from 'react';
import {View, Text, Button, TouchableOpacity, ScrollView} from "react-native";
import StyleSheet from '../Styles/mainStyle';
import {Ionicons} from '@expo/vector-icons';
import Warning from '../Components/warning/warning'

export default class CurrentTestScreen extends React.Component{


    render(){
        // console.log(this.props.navigation.getParam('questions'))
       
        return(
            <View style={StyleSheet.con}>
                <View>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("App")} style={{paddingVertical: 15, borderBottomColor: "#525252", flexDirection: 'row', borderBottomWidth: 1, marginHorizontal: 10}}>
                        <Ionicons name='ios-arrow-back' size={28} color={"white"}/>
                        <Text style={[StyleSheet.title, {marginLeft: 20}]}>{this.props.navigation.getParam('text')}</Text>
                      
                    </TouchableOpacity>
                </View>

                <ScrollView style={{flex: 1}}>
                    <Warning desc={this.props.navigation.getParam('desc_more')}/>
                
                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: -30}}>
                        <TouchableOpacity 
                            style={StyleSheet.butt} 
                            onPress={()=> this.props.navigation.navigate("questionCp", {
                                id: this.props.navigation.getParam('id'),
                                quest: this.props.navigation.getParam('questions'),
                                result: this.props.navigation.getParam('result'),
                                salary: this.props.navigation.getParam('salary'),
                            })}>

                            
                                
                            <Text style={StyleSheet.textBtn}>Вперед</Text>
                        </TouchableOpacity>

                    </View>
               </ScrollView>
            </View>
        )
    }
}