import React, { Component } from 'react';
import {styles} from './styles';
import {Colors} from '../../colors/Colors';
import {Platform,StatusBar,View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';

export class NewTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstInputColor:Colors.lightGrey,
      secondInputColor:Colors.lightGrey,  
      firstInputText: '',
      secondInputText: '',    
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: 'New Task',
    headerRight: (
    <View style={{width:50,height:20}}>
          <TouchableOpacity onPress={() => {
                  navigation.getParam('handleAddData')(navigation.getParam('firstInput'),navigation.getParam('secondInput'));
            }} 
            underlayColor={Colors.white} 
            style = {{flex: 1, 
            alignItems: 'flex-start'}
            }>
              <Text style = {{color: Colors.white, fontSize: 17, lineHeight:20}}>Save</Text>
          </TouchableOpacity>
      </View>
    ),
    headerLeft: (
      <View style={{width:70,height:20}}>
          <TouchableOpacity onPress={() => navigation.goBack()} underlayColor={Colors.white}style = {{flex: 1, alignItems: 'flex-end'}}>
              <Text style = {{color: Colors.white, fontSize: 17, lineHeight:20}}>Cancel</Text>
          </TouchableOpacity>
      </View>
    ),
  });

  addTask(navigation){
    navigation.push('Home');
  }
  onFocus(input){
    if (input == 'first'){
      this.setState({
        firstInputColor: Colors.pink
      });
    }else{
      this.setState({
        secondInputColor: Colors.pink
      });
    }

  }
  onBlur(input){
    if (input == 'first'){
      this.setState({
        firstInputColor: Colors.lightGrey
      });
    }else{
      this.setState({
        secondInputColor: Colors.lightGrey
      });
    }
  }
  render() {
    return (
      <View style = {styles.container}>
        <TextInput
          onFocus ={() => this.onFocus('first')} onBlur ={() => this.onBlur('first')}
          style={{borderBottomWidth:1, borderBottomColor:this.state.firstInputColor, fontSize: 36, color: Colors.black, fontFamily: 'SourceSansPro-Regular',}}
          placeholder="Task title"     
          multiline = {false}
        />
        <TextInput 
          onFocus ={() => this.onFocus('second')} onBlur ={() => this.onBlur('second')}
          style={{borderBottomWidth:1, borderBottomColor:this.state.secondInputColor, textAlignVertical: 'top',height:90, fontFamily: 'SourceSansPro-Regular',fontSize: 14,}}
          placeholder = 'Task Description'
          multiline = {true}
          numberOfLines = {5}
        />
      </View>
    );
  }
}