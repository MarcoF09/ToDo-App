import React, { Component } from 'react';
import {styles} from './styles';
import {Colors} from '../../colors/Colors';
import {TouchableOpacity,Text, View, StyleSheet} from 'react-native';
import {CheckBox} from '../checkBox/CheckBox';

export class Item extends Component {

  render() {
    return (   
    <TouchableOpacity style={{backgroundColor: Colors.white}} onPress={this.props._onPress}>
      <View style = {styles.container} >
        <View style = {styles.textContainer}> 
            <Text style = {styles.primaryText} >{this.props['first-description']}</Text>
            <Text style = {styles.secondaryText}>{this.props['second-description']}</Text>
        </ View>
        <CheckBox checked = {this.props['status']}/>
      </View>
      </TouchableOpacity>
    );
  }
}
