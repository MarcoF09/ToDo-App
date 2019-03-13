import {StyleSheet } from 'react-native';
import {Colors} from '../../colors/Colors';

export const styles = StyleSheet.create({
    primaryText: {
        lineHeight: 54,
        fontSize: 24,
        color: Colors.black,
        fontFamily: 'SourceSansPro-Regular',
    },
    headerRightText: {
        color: 'white', 
        fontSize: 17, 
        lineHeight:20
    },
    headerRightContainer: {
        width:25,
        height:20
    },
    button: {
        alignItems: "center", 
        width: 204,
        height: 48, 
        marginTop:16
    },
});