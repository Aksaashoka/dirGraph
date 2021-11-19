import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {peticion} from '../utils/Peticion';

const Search = ({navigation}) => {
  const [mainUrl, setMainUrl] = useState('');
  const [response, setResponse] = useState([]);
  const handleChange = text => {
    setMainUrl(text);
  };
  const handleClick = async () => {
    const data = await peticion(mainUrl);
    setResponse(data);
    navigation.navigate('Detail', {content: data});
  };
  return (
    <>
      <TextInput onChangeText={handleChange} value={mainUrl} />
      <Button
        style={styles.btn}
        onPress={handleClick}
        mode="outlined"
        disabled={!mainUrl}>
        vamo
      </Button>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    marginVertical: 10,
    minWidth: 200,
    alignSelf: 'center',
  },
});
