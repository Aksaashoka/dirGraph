import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {peticion} from '../utils/Peticion';
import Drawer from './Drawer';
import {Button, TextInput} from 'react-native-paper';

const Home = () => {
  const [mainUrl, setMainUrl] = useState('');
  const [response, setResponse] = useState([]);
  const handleChange = text => {
    setMainUrl(text);
  };

  const handleClick = async () => {
    const data = await peticion(mainUrl);
    setResponse(data);
  };

  return (
    <View style={styles.pagina}>
      <Image style={styles.header} source={require('../assets/Logo.png')} />
      <Text style={styles.title}>Ingrese su Link debajo</Text>
      <TextInput onChangeText={handleChange} value={mainUrl} />
      <Button
        style={styles.btn}
        onPress={handleClick}
        mode="outlined"
        disabled={!mainUrl}>
        {response.length ? 'Actualizar' : 'Explorar'}
      </Button>
      {response.map(item => (
        <Drawer key={item.name} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    resizeMode: 'contain',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
  },
  pagina: {
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#ffff',
    flex: 1,
  },
  btn: {
    padding: 10,
    marginVertical: 10,
    minWidth: 200,
    alignSelf: 'center',
  },
});

export default Home;
