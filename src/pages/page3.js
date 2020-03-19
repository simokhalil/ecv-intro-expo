import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'transparent',
  },
});

const Page3 = () => {

  return (
    <View style={styles.container}>
      <Button style={styles.button} title="Button 1" />
      <Button style={styles.button} title="Button 2" />
      <Button style={styles.button} title="Button 3" />
      <Button style={styles.button} title="Button 4" />
      <Button style={styles.button} title="Button 5" />
    </View>
  )
};

export default Page3;
