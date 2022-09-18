import {NavigationProp} from '@react-navigation/native';
import { ViewStyle,ImageStyle } from 'react-native';


export default interface Props{
    navigation:NavigationProp<any,any>;
}

export interface StyleProps{
    container: ViewStyle;
      container1: ViewStyle;
      image: ImageStyle;
      input: ViewStyle;
      container2:ViewStyle;
      freeSpace:ViewStyle;
}