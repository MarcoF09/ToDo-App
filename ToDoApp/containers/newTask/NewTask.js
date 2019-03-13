import React, { Component } from 'react';
import {styles} from './styles';
import {Colors} from '../../colors/Colors';
import {StatusBar,View, TouchableOpacity, Text, TextInput } from 'react-native';

export class NewTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstInputColor:Colors.lightGrey,
      secondInputColor:Colors.lightGrey,  


      firstInputText: '',
      secondInputText: '',    
    };
    StatusBar.setBackgroundColor('#1f86ff');

  }

  static navigationOptions = ({navigation}) => ({
    title: 'New Task',
    headerRight: (
    <View style={{width:50,height:20}}>
          <TouchableOpacity onPress={() => {
                  navigation.getParam('handleAddData')(navigation.getParam('firstInput'),navigation.getParam('secondInput'));
                  navigation.pop();
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

  onChangeTitle = (text) => {
    this.props.navigation.setParams({firstInput: text});
    this.setState({firstInputText: text});
  }

  onChangeDescription = (text) => {
    this.props.navigation.setParams({secondInput: text});
    this.setState({secondInputText: text});
  }

  onFocus = (input) => {
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
  onBlur = (input) => {
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
        <StatusBar backgroundColor={Colors.customBlue}/>
        <TextInput
          onFocus ={() => this.onFocus('first')} onBlur ={() => this.onBlur('first')}
          style={{borderBottomWidth:1, borderBottomColor:this.state.firstInputColor, fontSize: 36, color: Colors.black, fontFamily: 'SourceSansPro-Regular',}}
          placeholder="Task title"     
          multiline = {false}
          onChangeText={(text) => this.onChangeTitle(text)}
          onChangeText={(text) => this.firstInputOnChange(text)}
        />
        <TextInput 
          onFocus ={() => this.onFocus('second')} onBlur ={() => this.onBlur('second')}
          style={{borderBottomWidth:1, borderBottomColor:this.state.secondInputColor, textAlignVertical: 'top',height:90, fontFamily: 'SourceSansPro-Regular',fontSize: 14,}}
          placeholder = 'Task Description'
          multiline = {true}
          numberOfLines = {5}
          onChangeText={(text) => this.onChangeDescription(text)}
        />
      </View>
    );
  }
}