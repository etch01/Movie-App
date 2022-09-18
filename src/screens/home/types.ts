import {NavigationProp} from '@react-navigation/native';
import { ViewStyle, TextStyle } from 'react-native';


export default interface Props{
    navigation:NavigationProp<any,any>;
}

export interface StyleProps{
    container: ViewStyle;
    loader:ViewStyle;
    listContainer:ViewStyle;
}