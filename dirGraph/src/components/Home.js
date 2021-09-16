import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {peticion} from '../utils/Peticion';
import Drawer from './Drawer';

const Home = () => {
  const [mainUrl, setmainUrl] = useState('');
  const [response, setresponse] = useState([]);

  const handleChange = text => {
    setmainUrl(text);
  };

  const handleClick = async () => {
    let data = await peticion(mainUrl);
    setresponse(data);
  };

  return (
    <View>
      <Text>Inserte URL</Text>
      <TextInput onChangeText={handleChange} value={mainUrl} />
      <Button
        title={response.length ? 'Actualizar' : 'Clickear'}
        onPress={handleClick}
      />
      {response.map(item => <Drawer item={item}/>)}
    </View>
  );
};

export default Home;
