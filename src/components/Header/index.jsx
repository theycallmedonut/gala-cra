import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { withRouter } from 'react-router-dom';

// Utils
import { addLineBreaks } from '../../utils/string';
import { languagesList } from '../../config/i18n';

// Styles
import logo from '../../images/logo.svg';
import {
  HeaderLanguages,
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
import { withTranslation } from 'react-i18next';

const Header = ({ getDonatedMonths, totalMonths, history, t }) => {
  const goToHomepage = () => history.push(HOME);

  const handleLanguageSwitch = (language) => i18next.changeLanguage(language);

  useEffect(() => {
    if (!totalMonths) getDonatedMonths();
  }, [totalMonths]);

  return (
    <HeaderWrapper>
      <HeaderLogo src={logo} onClick={goToHomepage} />

      <HeaderLanguages>
        {Object.entries(languagesList).map(([key]) => (
          <div onClick={() => handleLanguageSwitch(key)}>{key}</div>
        ))}
      </HeaderLanguages>

      <HeaderTitle>{addLineBreaks(t('HEADER_TITLE'))}</HeaderTitle>
      <HeaderTotalMonths>{totalMonths || '...'}</HeaderTotalMonths>
      <HeaderSubtitle>{t('HEADER_MONTHS_DONATED')}</HeaderSubtitle>
    </HeaderWrapper>
  );
};

const mapStateToProps = ({ basic }) => ({
  totalMonths: basic.totalMonths,
});

const mapDispatchToProps = {
  getDonatedMonths: fetchTotalMonthsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withTranslation()(Header)));
