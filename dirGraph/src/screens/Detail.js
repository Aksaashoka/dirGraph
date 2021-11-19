import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Directory from '../components/Directory';

export default function Detail({route}) {
  const {content} = route.params;
  return (
    <View>
      {content?.map(item => (
        <Directory key={item.name} item={item} />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  prueba: {
    fontSize: 24,
    color: 'red',
    padding: 10,
  },
});
