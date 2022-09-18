import { StyleSheet, Dimensions } from "react-native";
import {StyleProps} from './types';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create<StyleProps>({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
      },
      container1: {
        marginTop: width * 0.4,
      },
      image: {
        width: width * 0.7,
        height: width * 0.3,
      },
      input: {
        width: width * 0.8,
        borderBottomColor: '#ffff',
        borderBottomWidth: 1,
        color: '#ffff',
        marginTop: 20,

      },
      container2: {
        marginTop: 30,
      },
      freeSpace:{
        width:40
      }
})

export default styles;