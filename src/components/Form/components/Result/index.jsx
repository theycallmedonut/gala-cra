import React, { memo } from 'react';

import GoldLabel from '../../../GoldLabel';
import { BUTTON_AGAIN, RESULT_SUCCESS_MESSAGE, RESULT_TITLE } from '../../../../constants';
import { ResultMessage, ResultTitle } from './styles';
import { addLineBreaks } from '../../../../utils/string';
import ActionButtons from '../ActionButtons';

const Result = ({ onSubmit, beforeSubmit }) => {
  const handleSubmit = () => {
    beforeSubmit();
    onSubmit();
  };

  return (
    <>
      <ResultTitle>{RESULT_TITLE}</ResultTitle>
      <GoldLabel style={{ margin: '0 auto' }} />
      <ResultMessage>{addLineBreaks(RESULT_SUCCESS_MESSAGE)}</ResultMessage>
      <ActionButtons onSubmit={handleSubmit} submitTitle={BUTTON_AGAIN} />
    </>
  );
};

export default Result;
