import React from 'react';
import { withTranslation } from 'react-i18next';

import { ActionButtonsCancel, ActionButtonsSubmit, ActionButtonsWrapper } from './styles';

const ActionButtons = ({ onSubmit, onCancel, submitTitle = 'send', style = {}, t }) => {
  return (
    <ActionButtonsWrapper style={style}>
      <ActionButtonsSubmit type="primary" onClick={onSubmit}>
        {submitTitle}
      </ActionButtonsSubmit>
      {onCancel && (
        <ActionButtonsCancel style={{ marginTop: '12px' }} onClick={onCancel}>
          {t('BUTTON_BACK')}
        </ActionButtonsCancel>
      )}
    </ActionButtonsWrapper>
  );
};

export default withTranslation()(ActionButtons);
