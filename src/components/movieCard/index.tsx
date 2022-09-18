import React from 'react';
import {Image, Text, View, ImageBackground} from 'react-native';
import styles from './styles';
import Props from './types'
import images from '../../assets/images';

const MovieCard:React.FC<Props> = ({src,title}:Props) => {
    
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} resizeMode={'cover'} source={{uri:src}}/>
        </View>
        <Text style={styles.text}>{title}</Text>
    </View>

  )
}

export default MovieCard;