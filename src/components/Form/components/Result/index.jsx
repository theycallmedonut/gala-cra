import React from 'react';
import { withTranslation } from 'react-i18next';

import GoldLabel from '../../../GoldLabel';
import { ResultMessage, ResultTitle } from './styles';
import { addLineBreaks } from '../../../../utils/string';
import ActionButtons from '../ActionButtons';

const Result = ({ onSubmit, beforeSubmit, t }) => {
  const handleSubmit = () => {
    beforeSubmit();
    onSubmit();
  };

  return (
    <>
      <ResultTitle>{t('RESULT_TITLE')}</ResultTitle>
      <GoldLabel style={{ margin: '0 auto' }} />
      <ResultMessage>{addLineBreaks(t('RESULT_SUCCESS_MESSAGE'))}</ResultMessage>
      <ActionButtons onSubmit={handleSubmit} submitTitle={t('BUTTON_AGAIN')} />
    </>
  );
};

export default withTranslation()(Result);
