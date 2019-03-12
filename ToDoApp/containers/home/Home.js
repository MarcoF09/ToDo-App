import React, { Component } from 'react';
import {TouchableOpacity, Text, View, ScrollView, StyleSheet } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Item from '../../components/item/Item';
import ButtonCustom from '../../components/button/ButtonCustom';
import Detail from '../detail/Detail';
import NewTask from '../newTask/NewTask';

var data = [
    {
        'first-description': 'Description',
        'second-description': 'Second Description',
        'status': false
    },
    {
        'first-description': 'Description',
        'second-description': 'Second Description',
        'status': false
    },
    {
        'first-description': 'Description',
        'second-description': 'Second Description',
        'status': false
    },
    {
        'first-description': 'Description',
        'second-description': 'Second Description',
        'status': true
    }, 
    {
        'first-description': 'Description',
        'second-description': 'Second Description',
        'status': false
    }
];

class Home extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerLeft: (<View />),
    headerRight: (
        <View style={{width:25,height:20}}>
            <TouchableOpacity onPress={() => navigation.push('NewTask')} underlayColor="white" style = {{flex: 1, alignItems: 'flex-start'}}>
                <Text style = {{color: 'white', fontSize: 17, lineHeight:20}}>+</Text>
            </TouchableOpacity>
        </View>
      ),
  });
  render() {
    return (
      <View >
        <ScrollView >
        { 
            data.map((item,index) => <Item {...item} key = {index} _onPress ={()=> {this.props.navigation.push('Details',{...item})}}/>)
        }
        </ScrollView>
        <ButtonCustom text = "CLEAR ALL DONE" styleButton = {{alignItems: "center", width: 204,height: 48, marginTop:16}}/>
      </View>
    );
  }
}

const MainNavigator = createStackNavigator(
    {
        Home: Home,
        Details: Detail,
        NewTask: NewTask,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions:{
            headerStyle: { 
                backgroundColor: '#1f86ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf: 'center' ,
                textAlign: 'center',
                flex:1
            },
        }
    }
);
  
const AppNavigator = createAppContainer(MainNavigator);

module.exports = AppNavigator;

var styles = StyleSheet.create({});
