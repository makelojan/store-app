import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import data from './data.json'

const App = () => {
  return (
    <SafeAreaView>
      <FlatList 
        data={data}
        renderItem={({item})=><Text>{item.title}</Text>}
        numColumns='2'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
