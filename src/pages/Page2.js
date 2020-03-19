import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import AnimalsList from '../data/animals.json';
import CustomCard from '../components/CustomCard';
import CustomMarker from '../components/CustomMarker';
import mapStyle from '../utils/mapStyle.json';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width,
    height,
  },
  overlay: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    left: 0,
    paddingHorizontal: 20,
  },
});

const ecvCoords = { latitude: 47.217330, longitude: -1.565112 };

const Page2 = () => {
  const myMap = React.useRef();

  const onRegionChange = (region) => {
    console.log('region', region);
  };

  const onButtonPress = (lat, lng) => {
    myMap.current.animateToRegion({ latitude: lat, longitude: lng });
  };

  const onLikeClick = (likes) => {
    console.log('likes', likes);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={myMap}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 47.2183715,
          longitude: -1.553621,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={onRegionChange}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={ecvCoords}
          title="ECV Digital"
          description="Mon école"
        />

        <Marker
          coordinate={{ latitude: 47.2183715, longitude: -1.553621 }}
          title="ECV Digital"
          description="Mon école"
        />

        <Marker
          coordinate={ecvCoords}
          title="ECV Digital"
          description="Mon école"
        >
          <CustomMarker value="123 €" />
        </Marker>
      </MapView>

      <ScrollView horizontal style={styles.overlay}>
        {AnimalsList.map((animal, index) => (
          <TouchableOpacity key={index} onPress={() => onButtonPress(animal.lat, animal.lng)}>
            <CustomCard
              name={new Date().toLocaleString()}
              type={animal.type}
              image={animal.image}
              likes={animal.likes}
              comments={animal.comments}
              onLikeClick={onLikeClick}
              withFooter={false}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Page2;
