import React, { Component } from 'react';
import {styles} from './styles';
import {Colors} from '../../colors/Colors';
import {StatusBar, View, Text } from 'react-native';
import {ButtonCustom} from '../../components/button/ButtonCustom';


export class Detail extends Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = {
    title: 'Detail',
    headerRight: (<View />),
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style = {styles.container}>
        <StatusBar backgroundColor={Colors.customBlue}/>
        <View style ={{alignItems: 'flex-start'}}>
            <ButtonCustom text = "Not done" _onPress = {navigation.getParam('handleNotDone')}/>
        </View>
        <Text style = {styles.primaryText}>{navigation.getParam('first-description')}</Text>
        <Text style = {styles.secondaryText}>{navigation.getParam('second-description')}</Text>
        <ButtonCustom text = "MARK AS DONE" _onPress = {navigation.getParam('handleMarkAsDone')}/>
      </View>
    );
  }
}
