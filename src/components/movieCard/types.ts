import {NavigationProp} from '@react-navigation/native';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';


export default interface Props{
    src:any;
    title:string;
}

export interface StyleProps{
    container: ViewStyle;
    imageContainer:ViewStyle;
    image:ImageStyle;
    text:TextStyle;
}