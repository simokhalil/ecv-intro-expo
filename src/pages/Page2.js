import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomText from '../components/SectionTitle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Page2 = () => (
  <View style={styles.container}>
    <CustomText
      title="Page 2"
      subtitle="ST page 2"
    />
  </View>
);

export default Page2;
