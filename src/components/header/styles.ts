import { StyleSheet, Dimensions } from "react-native";
import {StyleProps} from './types';
const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create<StyleProps>({
    container: {
        backgroundColor:'#000',
        borderBottomColor:'gray',
        borderBottomWidth:1,
        height:height *0.07,
    },
    contentContainer:{
        flex:1,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20
    },
    titleText:{
        fontWeight:'bold',
        fontSize:16,
        color:'#fff'
    },
    titleExtraText:{
        fontSize:14,
        color:'gray'
    },
    imageContainer:{
        width:30,
        height:30
    },
    image:{
        flex:1,
        width:undefined,
        height:undefined
    }
})

export default styles;