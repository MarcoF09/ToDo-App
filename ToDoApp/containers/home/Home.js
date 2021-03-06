import React, { Component } from 'react';
import {StatusBar,TouchableOpacity, Text, View, ScrollView} from 'react-native';
import {Colors} from '../../colors/Colors';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Item} from '../../components/item/Item';
import { ButtonCustom } from '../../components/button/ButtonCustom';
import {Detail} from '../detail/Detail';
import {NewTask} from '../newTask/NewTask';
import {styles} from './styles';

class Home extends Component {
  constructor(props){
        super(props);
        this.state = {
            data:[{
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
            }]
        }
    }

  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerLeft: (<View />),
    headerRight: (
        <View style={styles.headerRightContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('NewTask',{handleAddData: navigation.getParam('addData')})}>
                <Text style = {styles.headerRightText}>+</Text>
            </TouchableOpacity>
        </View>
      ),
  });

  onPressFuction = (item) => { this.props.navigation.push('Details', {...item}) }

  componentDidMount(){
    this.props.navigation.setParams({addData: this._handleAddData});
  }

  _handleAddData = (taskTitle,taskDescription) => {

    let joined = this.state.data.concat({'first-description': taskTitle, 'second-description': taskDescription,status: false});
    this.setState({ data: joined });
  }

  _handleCheckBoxClick = (index) => {
      this.state.data[index].status = !this.state.data[index].status;
      let dataModified = this.state.data;
      this.setState({ data: dataModified });
  }

  _handleClearAllDone = () => {
      let dataModified = this.state.data.map((element) => {element.status = false; return element;});
      this.setState({ data: dataModified });
  }
  //Home handles
  _handleCheckBoxClick(index){
      this.state.data[index].status = !this.state.data[index].status;
      let dataModified = this.state.data;
      this.setState({ data: dataModified });
  }

  _handleClearAllDone(){
      let dataModified = this.state.data.map((element) => {element.status = false; return element;});
      this.setState({ data: dataModified });
  }
  //Detail handles
  _handleNotDone(index){
    this.state.data[index].status = false;
    let dataModified = this.state.data;
    this.setState({ data: dataModified });
    this.props.navigation.pop();

  }

  _handleMarkAsDone(index){
    this.state.data[index].status = true;
    let dataModified = this.state.data;
    this.setState({ data: dataModified });
    this.props.navigation.pop();

  }

  render() {
    return (
      <View >
        <StatusBar backgroundColor={Colors.customBlue}/>
        <ScrollView >
        { 
            this.state.data.map((item,index) => <Item {...item} 
                                                    key = {index} 
                                                    _onPress ={()=> {this.props.navigation.push('Details',{...item,handleNotDone:() => {this._handleNotDone(index)},handleMarkAsDone: () => {this._handleMarkAsDone(index)}})}} 
                                                    checkboxClick = {() => this._handleCheckBoxClick(index)} 
                                                    />)
        }
        </ScrollView>
        {
            this.state.data.length > 0 ? <ButtonCustom text = "CLEAR ALL DONE" _onPress = {this._handleClearAllDone} styleButton = {{alignItems: "center", width: 204,height: 48, marginTop:16}}/> : <Text style = {styles.primaryText}>No task to display, please add a task!</Text>
        }
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
            headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf: 'center' ,
                textAlign: 'center',
                flex:1
            },
        }
    }
);
  
export const AppNavigator = createAppContainer(MainNavigator);