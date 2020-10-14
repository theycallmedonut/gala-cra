import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import { LayoutWrapper } from './styles';
import { CreateHead } from '../Head/helper';
import { connect } from 'react-redux';
import { isMobileDevice } from '../../utils/layout';
import { setIsMobileAction } from '../../redux/actions/basic';

const LayoutDefault = ({ setIsMobile, isMobile, component: Component, ...props }) => {
  const handleSetIsMobile = useCallback(() => setIsMobile(isMobileDevice()), [setIsMobile]);

  useEffect(() => {
    if (isMobile === null) handleSetIsMobile();

    window.addEventListener('resize', handleSetIsMobile);
    return () => window.removeEventListener('resize', handleSetIsMobile);
  }, [handleSetIsMobile, isMobile]);

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

const mapStateToProps = ({ basic }) => ({
  isMobile: basic.isMobile,
});

const mapDispatchToProps = {
  setIsMobile: setIsMobileAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutDefault);
