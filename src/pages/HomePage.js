import React, { useEffect, useState } from 'react';
import { Actions } from 'react-native-router-flux';
import { Button, Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import CustomCard from '../components/CustomCard';
import SectionTitle from '../components/SectionTitle';

import AnimalsList from '../data/animals.json';

const { width } = Dimensions.get('window'); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  scrolHorizontal: {
    width: '100%'
  },
  customCard: {
    width: 200,
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

  const onLikeClick = (likes) => {
    console.log('likes', likes);
  };

  return (
    <ScrollView>
      <View style={styles.container}>

        {/* <ScrollView
          style={styles.scrolHorizontal}
          horizontal
          snapToOffsets={[210, 410, 640, 860, 1080]}
          snapToAlignment="start"
        >
          <CustomCard
            styles={styles.customCard}
            withFooter={false}
          />
          <CustomCard
            styles={styles.customCard}
            withFooter={false}
          />
          <CustomCard
            styles={styles.customCard}
            withFooter={false}
          />
          <CustomCard
            styles={styles.customCard}
            withFooter={false}
          />
          <CustomCard
            styles={styles.customCard}
            withFooter={false}
          />
        </ScrollView> */}

        {AnimalsList.map((animal, index) => (
          <TouchableOpacity key={index} onPress={() => console.log('Test')}>
            <CustomCard
              name={animal.name}
              type={animal.type}
              image={animal.image}
              likes={animal.likes}
              comments={animal.comments}
              onLikeClick={onLikeClick}
            />
          </TouchableOpacity>
        ))}

        <SectionTitle
          title="Home Page"
          subtitle={myText}
        />

        <Button
          title="Page 2"
          onPress={onButtonPress}
        />
      </View>
    </ScrollView>
  );
}

export default HomePage;
