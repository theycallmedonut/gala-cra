import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Utils
import { addLineBreaks } from '../../utils/string';

// Styles
import logo from '../../images/logo.svg';
import {
  HeaderLogo,
  HeaderSubtitle,
  HeaderTitle,
  HeaderTotalMonths,
  HeaderWrapper,
} from './styles';

// Constants
import { HEADER_MONTHS_DONATED, HEADER_TITLE } from '../../constants';
import { HOME } from '../../config/routePaths';
import { fetchTotalMonthsAction } from '../../redux/actions/basic';

const Header = ({ getDonatedMonths, totalMonths, history }) => {
  const goToHomepage = () => history.push(HOME);

  useEffect(() => {
    if (!totalMonths) getDonatedMonths();
  }, [totalMonths]);

  return (
    <HeaderWrapper>
      <HeaderLogo src={logo} onClick={goToHomepage} />
      <HeaderTitle>{addLineBreaks(HEADER_TITLE)}</HeaderTitle>
      <HeaderTotalMonths>{totalMonths || '...'}</HeaderTotalMonths>
      <HeaderSubtitle>{HEADER_MONTHS_DONATED}</HeaderSubtitle>
    </HeaderWrapper>
  );
};

const mapStateToProps = ({ basic }) => ({
  totalMonths: basic.totalMonths,
});

const mapDispatchToProps = {
  getDonatedMonths: fetchTotalMonthsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
