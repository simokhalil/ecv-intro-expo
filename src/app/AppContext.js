import PropTypes from 'prop-types';
import React from 'react';

const defaultContextValue = {
  data: {
    currentAnimal: null,
  },
  set: () => {},
};

const { Provider, Consumer } = React.createContext(defaultContextValue);

class ContextProviderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...defaultContextValue,
      set: this.setData,
    };
  }

  setData = (newData) => {
    this.setState((state) => ({
      data: {
        ...state.data,
        ...newData,
      },
    }));
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>
  }
}

ContextProviderComponent.propTypes = {
  children: PropTypes.any.isRequired,
};

const withContext = (Component) => (props) => (
  <Consumer>
    {(data) => <Component {...props} context={data} />}
  </Consumer>
);

export {
  Consumer as default,
  ContextProviderComponent,
  withContext,
};
