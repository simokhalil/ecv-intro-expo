import React from 'react';
import { Router, Tabs, Scene } from 'react-native-router-flux';
import { Image, View } from 'react-native';

import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import CustomTabBar from './src/components/CustomTabBar';
import HomePage from './src/pages/HomePage';
import Page2 from './src/pages/Page2';
import Page3 from './src/pages/page3';

const NavBarTitle = ({ title, imageSrc }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image source={{ uri: imageSrc }} style={{ width: 30, height: 30 }} />
    <Text>{title}</Text>
  </View>
);

export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {

    const load = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
        ...FontAwesome.font,
      });

      setIsReady(true);
    };

    load();
  }, [])

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Router>
        <Tabs
          key="root"
          tabBarStyle={{ backgroundColor: '#0000ff' }}
          labelStyle={{ color: '#fff', fontSize: 18 }}
          // tabBarComponent={CustomTabBar}
        >
          <Scene
            key="homepage"
            component={HomePage}
            title="Home Page"
            navigationBarStyle={{ backgroundColor: '#00ff00' }}
            renderTitle={<NavBarTitle title="Test" imageSrc="https://image.shutterstock.com/image-vector/abstract-blurred-gradient-mesh-background-260nw-460041640.jpg" />}
          />
          <Scene key="page2" component={Page2} title="Page 2" />
          <Scene key="page3" component={Page3} title="Page 3" />
        </Tabs>
      </Router>
    </Container>
  );
}
