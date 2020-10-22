import React from 'react';

import { BUTTON_BACK } from '../../../../constants';
import { ActionButtonsCancel, ActionButtonsSubmit, ActionButtonsWrapper } from './styles';

const ActionButtons = ({ onSubmit, onCancel, submitTitle = 'send', style = {} }) => {
  return (
    <ActionButtonsWrapper style={style}>
      <ActionButtonsSubmit type="primary" onClick={onSubmit}>
        {submitTitle}
      </ActionButtonsSubmit>
      {onCancel && (
        <ActionButtonsCancel style={{ marginTop: '12px' }} onClick={onCancel}>
          {BUTTON_BACK}
        </ActionButtonsCancel>
      )}
    </ActionButtonsWrapper>
  );
};

export default ActionButtons;
