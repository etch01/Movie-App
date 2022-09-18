import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Props from './types'
import images from '../../assets/images';

const Header:React.FC<Props> = ({title, onPressLogout}:Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            <View>
                <Text style={styles.titleText}>Hello {title}</Text>
                <Text style={styles.titleExtraText}>Watch your favorite movies</Text>
            </View>
            <TouchableOpacity onPress={onPressLogout} style={styles.imageContainer}>
                <Image style={styles.image} resizeMode='cover' source={images.logout}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header;