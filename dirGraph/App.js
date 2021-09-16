import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import MainStack from './src/navigation/MainStack';
import Home from "./src/components/Home"
const App = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <Home/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
