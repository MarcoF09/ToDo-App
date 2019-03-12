import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ButtonCustom from '../../components/button/ButtonCustom';

class Detail extends Component {
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

module.exports = Detail;

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
    primaryText: {
        lineHeight: 54,
        fontSize: 36,
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
