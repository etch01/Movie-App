import { StyleSheet, Dimensions } from "react-native";
import {StyleProps} from './types';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create<StyleProps>({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000'
    },
    loadingText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        marginVertical:20
    }
})

export default styles;