import React, { Component } from 'react';
import { Image, View, StyleSheet} from 'react-native';

class CheckBox extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end", backgroundColor: 'white'}}>
        {
            this.props.checked ? <Image source = {require('../../resources/images/iconCheckboxActive.png')} /> : <Image source = {require('../../resources/images/iconCheckboxInactive.png')} />
        }
        </View>
      );
    }
}
module.exports = CheckBox;

const styles = StyleSheet.create({
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    image: {
      backgroundColor: 'white',
    },
  });