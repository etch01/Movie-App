import { StyleSheet, Dimensions } from "react-native";
import {StyleProps} from './types';
const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create<StyleProps>({
    container: {
        flex:1,
        marginVertical:10,
        marginHorizontal:10,
        alignItems:'center',
        width:width / 2.6,
        height: height/3
    },
    imageContainer:{
        flex:1,
        alignItems:'center',
    },
    image:{
        flex:1,
        width:width / 2.6,
        height: height/3,
        borderRadius:10
    },
    text:{
        color:'#fff',
        textAlign:'center',
        marginTop:10
    }
})

export default styles;