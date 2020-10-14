import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from './store';

const ReduxContainer = ({ children }) => <Provider store={store}>{children}</Provider>;

ReduxContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ReduxContainer;
