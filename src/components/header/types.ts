import {NavigationProp} from '@react-navigation/native';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';


export default interface Props{
    title:string;
    onPressLogout:()=>void;
}

export interface StyleProps{
    container: ViewStyle;
    contentContainer:ViewStyle;
    titleText:TextStyle;
    titleExtraText:TextStyle;
    imageContainer:ViewStyle;
    image:ImageStyle;
}