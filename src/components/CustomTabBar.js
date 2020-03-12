import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class CustomTabBar extends React.Component {
  
  onTabClick = (key) => {
    Actions.jump(key);
  };

  render() {
    const { state } = this.props.navigation;
    const activeTabIndex = state.index;

    console.log('state.routes', state.routes);

    return (
      <View>
        {
          state.routes.map(element => (
            <TouchableOpacity key={element.key} onPress={() => this.onTabClick(element.key)}>
              <Text>{element.params ? element.params.title.toUpperCase() : element.key.toUpperCase()}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }
}
