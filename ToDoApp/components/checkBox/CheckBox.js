import React, { Component } from 'react';
import {styles} from './styles';
import {Colors} from '../../colors/Colors';
import {TouchableOpacity, Image, View} from 'react-native';
import checkboxActive from '../../resources/images/iconCheckboxActive.png';
import checkboxinactive from '../../resources/images/iconCheckboxInactive.png';


export class CheckBox extends Component {
    render() {
      return (
        <View style={styles.checkBoxContainer}>
          <TouchableOpacity onPress = {this.props.click}>
            {
                this.props.checked ? <Image  source = {checkboxActive} /> : <Image source = {checkboxinactive} />

            }
          </TouchableOpacity>
        </View>
      );
    }
}
