import React, { Component } from 'react';
import {styles} from './styles';
import {Colors} from '../../colors/Colors';
import {Platform,StatusBar, View, Text, StyleSheet } from 'react-native';
import {ButtonCustom} from '../../components/button/ButtonCustom';

export class Detail extends Component {
  constructor(props){
    super(props);
    if(Platform.OS == 'android'){
      StatusBar.setBackgroundColor(Colors.customBlue);
    }
  }
  static navigationOptions = {
    title: 'Detail',
    headerRight: (<View />),
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style = {styles.container}>
        <View style ={{alignItems: 'flex-start'}}>
            <ButtonCustom text = "Not done"/>
        </View>
        <Text style = {styles.primaryText}>{navigation.getParam('first-description')}</Text>
        <Text style = {styles.secondaryText}>{navigation.getParam('second-description')}</Text>
        <ButtonCustom text = "MARK AS DONE" />
      </View>
    );
  }
}
