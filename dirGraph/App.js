import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import MainStack from './src/navigation/MainStack';
import Home from "./src/components/Home"
const App = () => {

  return (
    <SafeAreaView>
        <Home/>
    </SafeAreaView>
  );
};


export default App;
