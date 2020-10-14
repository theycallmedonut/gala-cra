import React from 'react';
import { FormTitle, FormWrapper } from '../../../../styles/UI/form';
import GoldLabel from '../../../GoldLabel';
import {
  BUTTON_AGAIN,
  LABEL_CHECK_1_LINK,
  RESULT_SUCCESS_MESSAGE,
  RESULT_TITLE,
} from '../../../../constants';
import Button from '../Button';
import routes from '../../../../routes';
import routesPath from '../../../../config/routePaths';
import { ResultMessage, ResultTitle } from './styles';
import { addLineBreaks } from '../../../../utils/string';
import { Link } from 'react-router-dom';
import ActionButtons from '../ActionButtons';

const Result = ({ title, date, onSubmit, beforeSubmit }) => {
  const handleSubmit = () => {
    beforeSubmit();
    onSubmit();
  };

  return (
    <>
      <ResultTitle>{RESULT_TITLE}</ResultTitle>
      <GoldLabel title={title} date={date} />
      <ResultMessage>{addLineBreaks(RESULT_SUCCESS_MESSAGE)}</ResultMessage>
      <ActionButtons onSubmit={handleSubmit} submitTitle={BUTTON_AGAIN} />
    </>
  );
};

export default Result;
