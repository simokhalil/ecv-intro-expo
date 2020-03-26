import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Dimensions, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const { width, height } = Dimensions.get('window');

const styles = {
  card: {
    width: width - 10,
  },
};

export default class CustomCard extends Component {
  render() {
    const {
      styles: customStyles,
      withFooter,
      name,
      type,
      likes,
      comments,
      image,
      onLikeClick,
      onCommentClick,
    } = this.props;

    return (
      <Card style={{ ...styles.card, ...customStyles }}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://image.shutterstock.com/image-vector/abstract-blurred-gradient-mesh-background-260nw-460041640.jpg'}} />
            <Body>
              <Text>{name}</Text>
              <Text note>{type}</Text>
            </Body>
          </Left>
        </CardItem>
        
        {!!image && (
          <CardItem cardBody>
            <Image source={{uri: image}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
        )}
        
        {withFooter && (
          <CardItem>
            <Left>
              <Button transparent onPress={() => onLikeClick(likes)}>
                <Icon active name="thumbs-up" />
                <Text>{likes} Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent onPress={() => onCommentClick()}>
                <Icon active name="chatbubbles" />
                <Text>{comments} Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        )}
      </Card>
    );
  }
}

CustomCard.propTypes = {
  styles: PropTypes.object,
  withFooter: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  image: PropTypes.string,
  onLikeClick: PropTypes.func.isRequired,
  onCommentClick: PropTypes.func,
};

CustomCard.defaultProps = {
  styles: {},
  withFooter: true,
  image: null,
  onCommentClick: () => {},
};
