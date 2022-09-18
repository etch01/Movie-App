import React,{useEffect} from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import {observer} from 'mobx-react-lite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import Props from './types';

const Splash:React.FC<Props> = ({navigation}:Props) => {

  const checkLoginStatus = async():Promise<void> =>{
    const token = await AsyncStorage.getItem('accessToken');
    if (token){
      navigation.navigate('RootHome', {screen: 'Home'})
    }else{
      navigation.navigate('Auth', {screen: 'Login'})
    }
  }

  useEffect(()=>{
    checkLoginStatus()
  },[])

  return (
    <View style={styles.container}>
        <Text style={styles.loadingText}>Loading</Text>
        <ActivityIndicator size={'large'} color={'#fff'}/>
    </View>
  )
}

export default observer(Splash);