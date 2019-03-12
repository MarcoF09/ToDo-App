import React, { Component } from 'react';
import {Alert,TouchableHighlight, Text, View, StyleSheet} from 'react-native';
 
class ButtonCustom extends Component {
    render() {
      return (
        <View style={styles.container}>
            <TouchableHighlight onPress={this.props._onPress} underlayColor="white">
                <View style = {this.props.styleButton}>
                  <Text style={styles.buttonText}>{this.props.text}</Text>
                </View>
            </TouchableHighlight>
        </View>
      );
    }
}

module.exports = ButtonCustom;

const styles = StyleSheet.create({
    container: {
        alignItems: "center", 
    },
    buttonText: {
      color: '#ff197b',
      fontSize: 14,
      lineHeight: 32,
      fontFamily: 'SourceSansPro-SemiBold',
    },
  });
