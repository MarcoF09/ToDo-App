import React, { Component } from 'react';
import {TouchableOpacity,Text, View, StyleSheet} from 'react-native';
import CheckBox from '../checkBox/CheckBox';

class Item extends Component {

  render() {
    return (   
    <TouchableOpacity style={{backgroundColor: "white"}} onPress={this.props._onPress}>
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

module.exports = Item;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:16, 
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#f0f0f0',
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    primaryText: {
        lineHeight: 24,
        fontSize: 16,
        color: 'black',
        fontFamily: 'SourceSansPro-Regular',
    },
    secondaryText: {
        lineHeight: 20,
        fontSize: 14,
        color: '#959595',
        fontFamily: 'SourceSansPro-Regular',
    },
  });
