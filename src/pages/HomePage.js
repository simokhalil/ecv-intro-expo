import React, { useEffect, useState } from 'react';
import { Actions } from 'react-native-router-flux';
import { Button, StyleSheet, Text, View } from 'react-native';

import CustomCard from '../components/CustomCard';
import SectionTitle from '../components/SectionTitle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomePage = () => {
  const [myText, setMyText] = useState('Chargement...');

  useEffect(() => {
    setTimeout(() => {
      setMyText('Home subtitle');
    }, 3000);
  }, []);

  const onButtonPress = () => {
    Actions['page2']();
  };

  return (
    <View style={styles.container}>

      <CustomCard />

      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard /><CustomCard />


        <SectionTitle
          title="Home Page"
          subtitle={myText}
        />

        <Button
          title="Page 2"
          onPress={onButtonPress}
        />
      </View> 
  );
}

export default HomePage;
