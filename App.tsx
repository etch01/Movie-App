import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import 'react-native-gesture-handler';
import { Provider as MobxProvider } from "mobx-react";
import RootStore from "./src/mobx-stores/index";
import Navigation from './src/navigation/stackNavigatior';

const App =() => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <MobxProvider {...RootStore.Stores}>
      <StatusBar  barStyle="light-content"/>
      <SafeAreaView style={styles.sectionContainer}>
        <Navigation/>
      </SafeAreaView>
    </MobxProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    backgroundColor:'#000'
  },
});

export default App;
