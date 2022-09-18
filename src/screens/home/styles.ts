import { StyleSheet, Dimensions } from "react-native";
import {StyleProps} from './types';
const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create<StyleProps>({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    loader:{
        flex:1,
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center'
    },
    listContainer:{
        padding:20,
    }
})

export default styles;