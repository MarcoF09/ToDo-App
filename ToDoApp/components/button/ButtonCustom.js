import React, { Component } from 'react';
import {styles} from './styles';
import {Colors} from '../../colors/Colors';
import {TouchableHighlight, Text, View} from 'react-native';
 
export class ButtonCustom extends Component {
    render() {
      return (
        <View style={styles.container}>
            <TouchableHighlight onPress={this.props._onPress} underlayColor={Colors.white}>
                <View style = {this.props.styleButton}>
                  <Text style={styles.buttonText}>{this.props.text}</Text>
                </View>
            </TouchableHighlight>
        </View>
      );
    }
}
