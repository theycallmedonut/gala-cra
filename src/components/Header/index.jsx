import React from 'react';
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

const Header = ({ history }) => {
  const goToHomepage = () => history.push(HOME);

  return (
    <HeaderWrapper>
      <HeaderLogo src={logo} onClick={goToHomepage} />
      <HeaderTitle>{addLineBreaks(HEADER_TITLE)}</HeaderTitle>
      <HeaderTotalMonths>127,680</HeaderTotalMonths>
      <HeaderSubtitle>{HEADER_MONTHS_DONATED}</HeaderSubtitle>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
