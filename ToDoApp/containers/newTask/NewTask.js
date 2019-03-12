import React, { Component } from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';

class NewTask extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstInputColor:'#f0f0f0',
      secondInputColor:'#f0f0f0',      
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: 'New Task',
    headerRight: (
      <View style={{width:50,height:20}}>
          <TouchableOpacity onPress={() => this.addTask(navigation)} underlayColor="white" style = {{flex: 1, alignItems: 'flex-start'}}>
              <Text style = {{color: 'white', fontSize: 17, lineHeight:20}}>Save</Text>
          </TouchableOpacity>
      </View>
    ),
    headerLeft: (
      <View style={{width:70,height:20}}>
          <TouchableOpacity onPress={() => navigation.goBack()} underlayColor="white" style = {{flex: 1, alignItems: 'flex-end'}}>
              <Text style = {{color: 'white', fontSize: 17, lineHeight:20}}>Cancel</Text>
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
        firstInputColor: '#ff197b'
      });
    }else{
      this.setState({
        secondInputColor: '#ff197b'
      });
    }

  }
  onBlur(input){
    if (input == 'first'){
      this.setState({
        firstInputColor: '#f0f0f0'
      });
    }else{
      this.setState({
        secondInputColor: '#f0f0f0'
      });
    }
  }
  render() {
    return (
      <View style = {styles.container}>
        <TextInput
          onFocus ={() => this.onFocus('first')} onBlur ={() => this.onBlur('first')}
          style={{borderBottomWidth:1, borderBottomColor:this.state.firstInputColor, fontSize: 36, color: 'black', fontFamily: 'SourceSansPro-Regular',}}
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

module.exports = NewTask;

const styles = StyleSheet.create({
  container: {
      padding:16, 
      flexDirection: 'column',
      borderWidth: 1,
      borderColor: '#f0f0f0',
  },
  textContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
  },
});