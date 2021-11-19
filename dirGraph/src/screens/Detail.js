import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Detail({route}) {
  const {content} = route.params;
  return (
    <View>
      <Text style={styles.prueba}> {JSON.stringify(content)}</Text>
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
