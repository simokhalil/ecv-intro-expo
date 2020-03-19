import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#432faa',
    borderRadius: 5,
  },
  arrow: {
    width: 10,
    height: 10,
    backgroundColor: '#432faa',
    position: 'absolute',
    alignSelf: 'center',
    bottom: -5,
    transform: [{ rotate: '45deg' }],
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
};

const CustomMarker = ({ value }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{value}</Text>
    <View style={styles.arrow} />
  </View>
);

CustomMarker.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CustomMarker;
