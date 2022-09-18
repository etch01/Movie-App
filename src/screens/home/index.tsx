import React,{useEffect} from 'react';
import {ActivityIndicator, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { observer } from 'mobx-react-lite';
import authStore from '../../mobx-stores/stores/authStore';
import moviesStore from '../../mobx-stores/stores/moviesStore';
import Header from '../../components/header';
import styles from './styles';
import Props from './types';
import Movie from '../../mobx-stores/store-interfaces/movieStoreInterface';
import MovieCard from '../../components/movieCard';

const Home:React.FC<Props> = ({navigation}:Props) => {

  useEffect(()=>{
    moviesStore.getCarMovies();
  },[])

  const logoutHandler=():void=>{
    authStore.logout(()=>navigation.navigate('Auth', {screen: 'Login'}));
  }

  const _renderItem:any = (item:any) => {
    return (
      <MovieCard title={item.item.Title} src={item.item.Poster}/>
    );
  };
console.log(moviesStore?.movies);

  return (
    <View style={styles.container}>
      <Header onPressLogout={logoutHandler} title={authStore?.name}/>
      {
        moviesStore.loadingMovies?
          <View style={styles.loader}>
            <ActivityIndicator color={'#fff'} size='large'/>
          </View>
          :
          <View  style={[styles.container,styles.listContainer]}>
            <FlatList
              keyExtractor={(item, _) => item?.imdbID.toString()}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={moviesStore?.movies || []}
              numColumns={2}
              renderItem={_renderItem}
              style={{flex:1}}
          />
          </View>
      }
    </View>
  )
}

export default observer(Home);