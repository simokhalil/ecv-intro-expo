import React, { useEffect, useState } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Icon, Input, Item } from 'native-base';

import CustomCard from '../components/CustomCard';
import CustomModal from '../components/CustomModal';

import AnimalsList from '../data/animals.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  filtersContainer: {
    flexDirection: 'row',
  },
  scrolHorizontal: {
    width: '100%'
  },
  customCard: {
    width: 200,
  },
  button: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  buttonActive: {
    backgroundColor: '#000',
  },
  buttonActiveText: {
    color: '#fff',
  },
});

const HomePage = () => {
  const [myText, setMyText] = useState('Chargement...');

  const [selectedType, setSelectedType] = useState(null);
  const [filteredAnimals, setFilteredAnimals] = useState(AnimalsList);
  const [searchText, setSearchText] = useState('');

  const modal = React.useRef();

  useEffect(() => {
    const newTab = AnimalsList.filter((item) => !selectedType ? true : item.type === selectedType);
    setFilteredAnimals(newTab);
  }, [AnimalsList, selectedType]);

  useEffect(() => {
    const newTab = AnimalsList.filter((item) => searchText === '' ? true : item.type.indexOf(searchText) > -1 );
    setFilteredAnimals(newTab);
  }, [AnimalsList, searchText]);

  const onButtonPress = (type) => {
    setSelectedType(type);
  };

  const onLikeClick = (likes) => {
    console.log('likes', likes);
    modal.current.show();
  };

  const onCommentClick = (animal) => {
    Alert.alert(
      animal.name,
      `Commentaires : ${animal.comments}`,
      [
        {text: 'OK', onPress: () => console.log('OK')},
      ],
      { cancelable: false },
    );
  };

  const goToDetails = (animal) => {
    Actions.details({
      animal,
      title: animal.name,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>

      <View style={styles.filtersContainer}>
        <Button style={[styles.button, selectedType === null && styles.buttonActive]} onPress={() => onButtonPress(null)}>
          <Text style={[styles.buttonText, selectedType === null && styles.buttonActiveText]}>Tous</Text>
        </Button>
        <Button style={[styles.button, , selectedType === 'Chien' && styles.buttonActive]} onPress={() => onButtonPress('Chien')}>
          <Text style={[styles.buttonText, selectedType === 'Chien' && styles.buttonActiveText]}>Chien</Text>
        </Button>
        <Button style={[styles.button, , selectedType === 'Castor' && styles.buttonActive]} onPress={() => onButtonPress('Castor')}>
          <Text style={[styles.buttonText, selectedType === 'Castor' && styles.buttonActiveText]}>Castor</Text>
        </Button>
        <Button style={[styles.button, , selectedType === 'Marmotte' && styles.buttonActive]} onPress={() => onButtonPress('Marmotte')}>
          <Text style={[styles.buttonText, selectedType === 'Marmotte' && styles.buttonActiveText]}>Marmotte</Text>
        </Button>
      </View>

      <View style={styles.filtersContainer}>
        <Item style={{ flex: 1 }}>
          <Icon type="FontAwesome" name='search' />
          <Input placeholder="Rechercher..." onChangeText={setSearchText} value={searchText} />
        </Item>
      </View>

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

        {filteredAnimals
          .map((animal, index) => (
            <TouchableOpacity key={index} onPress={() => goToDetails(animal)}>
              <CustomCard
                name={animal.name}
                type={animal.type}
                image={animal.image}
                likes={animal.likes}
                comments={animal.comments}
                onLikeClick={onLikeClick}
                onCommentClick={() => onCommentClick(animal)}
              />
            </TouchableOpacity>
          ))}
      </View>

      <CustomModal
        ref={modal}
      />
    </ScrollView>
  );
}

export default HomePage;
