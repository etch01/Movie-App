import React,{useState} from 'react';
import {View, Text, TextInput, Image, Button} from 'react-native';
import {observer} from 'mobx-react-lite';
import styles from './styles';
import Props from './types';
import authStore from '../../mobx-stores/stores/authStore';
import images from '../../assets/images';

const Auth:React.FC<Props> = ({navigation}:Props) => {
const [username,setUserName] = useState<string>('');
const [password,setPassword] = useState<string>('');
const [error,setError] = useState<string>('');

  const loginButtonHandler = ():void=>{
    //I rather use Formik and yup for validation than this
    if (username !== '' || password !== ''){
      authStore.login(username,password)
      .then(()=>navigation.navigate('RootHome', {screen: 'Home'}))
      .catch(err=>setError(err))
    }else{
      setError('Missing username or password');
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={images.movie}
        />
      </View>
      <View style={styles.container2}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUserName(text)}
          autoCapitalize={'none'}
          placeholderTextColor="#ffff"
          placeholder="Username"
        />
        <View style={styles.freeSpace}/>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize={'none'}
          placeholderTextColor="#ffff"
          placeholder="Password"
          secureTextEntry
        />
        <Text style={{color: '#ff3333'}}>{error}</Text>
      </View>
      <Button title="login" onPress={loginButtonHandler}/>
    </View>
  )
}

export default observer(Auth);