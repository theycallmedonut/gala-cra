import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import { LayoutWrapper } from './styles';
import { CreateHead } from '../Head/helper';

const LayoutDefault = ({ component: Component, ...props }) => {
  return (
    <>
      <CreateHead />
      <Header />
      <LayoutWrapper flexDirection="column" alignItems="center">
        <Component {...props} />
      </LayoutWrapper>
    </>
  );
};

LayoutDefault.propTypes = {
  component: PropTypes.shape().isRequired,
};

export default LayoutDefault;
