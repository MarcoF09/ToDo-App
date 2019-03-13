import React, { Component } from 'react';
import {TouchableOpacity, Text, View, ScrollView} from 'react-native';
import {Colors} from '../../colors/Colors';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Item} from '../../components/item/Item';
import { ButtonCustom } from '../../components/button/ButtonCustom';
import {Detail} from '../detail/Detail';
import {NewTask} from '../newTask/NewTask';
import {styles} from './styles';

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
        <View style={styles.headerRightContainer}>
            <TouchableOpacity onPress={() => navigation.push('NewTask')}>
                <Text style = {styles.headerRightText}>+</Text>
            </TouchableOpacity>
        </View>
      ),
  });

  onPressFuction = (item) => { this.props.navigation.push('Details', {...item}) }
  
  render() {
    return (
      <View >
        <ScrollView >
        { 
            data.map((item,index) => <Item {...item} key = {index} _onPress ={()=> this.onPressFuction(item)}/>)
        }
        </ScrollView>
        <ButtonCustom text = "CLEAR ALL DONE" styleButton = {styles.button}/>
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
                backgroundColor: Colors.customBlue,
            },
            headerTintColor: Colors.white,
        }
    }
);
  
export const AppNavigator = createAppContainer(MainNavigator);
