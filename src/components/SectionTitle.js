import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
    </>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

SectionTitle.defaultProps = {
  subtitle: 'sous-titre',
};

export default SectionTitle;
