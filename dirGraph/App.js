import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Home from './src/components/Home';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  }
});

export default App;
