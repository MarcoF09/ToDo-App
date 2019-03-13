import {StyleSheet } from 'react-native';
import {Colors} from '../../colors/Colors';

export const styles = StyleSheet.create({
    container: {
        padding:16, 
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: Colors.lightGrey,
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
  });