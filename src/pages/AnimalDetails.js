import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

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
  image: {
    width,
    aspectRatio: 16/9,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text: {
    width: '100%',
    paddingHorizontal: 20,
  },
});

const AnimalDetails = ({ animal }) => {

  if (!animal) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: animal.image }} style={styles.image} />

        <Text style={styles.title}>{animal.name}</Text>

        <Text style={styles.text}>Type: {animal.type}</Text>
        <Text style={styles.text}>Likes: {animal.likes}</Text>
        <Text style={styles.text}>Comments: {animal.comments}</Text>
      </View>
    </ScrollView>
  );
}

AnimalDetails.propTypes = {
  animal: PropTypes.object.isRequired,
};

export default AnimalDetails;
