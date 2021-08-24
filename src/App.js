import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import data from './data.json';
import Header from './components/Header';
import Card from './components/Card';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList 
        data={data}
        renderItem={({item})=><Text>{item.title}</Text>}
        numColumns='2'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15
  }
});

export default App;
