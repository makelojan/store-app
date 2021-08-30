import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text, View} from 'react-native';
import data from './data.json';
import Header from './components/Header';
import Card from './components/Card';

const App = () => {
  const renderCards = ({item}) => {
    return(
      <Card product={item}/>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={renderCards}
        numColumns='2'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1
  }
});

export default App;
