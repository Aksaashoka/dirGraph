import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {peticion} from '../utils/Peticion';
import Drawer from './Drawer';

const Home = ()=> {

  const [mainUrl, setmainUrl] = useState('');
  const [response, setresponse] = useState([]);
  
  const handleChange = text => {
    setmainUrl(text);
  };
  
  const handleClick = async () => {
    let data = await peticion(mainUrl);
    setresponse(data);
  };
  
  useEffect(() => setresponse(''), []);
  
  return (
    <View>
      <Text> Inserte URL</Text>
      <TextInput onChangeText ={handleChange} value={mainUrl}/>
      {response ? (
        <Button onPress={handleClick}>Actualizar</Button>
      ) : (
        <Button onPress={handleClick}>Clickear</Button>
      )}
      {response && response.map(child => <Drawer node={child} />)}
    </View>
  );
}

export default Home;
