import React from 'react';
import { FormButtonsWrapper } from './styles';
import { MONTHS, NEED_MORE } from '../../../../constants';
import FormButtonsItem from './components/FormButtonsItem';

const FormButtons = ({ bindedInputFunctions, current }) => {
  const buttonsDetails = [
    { qty: '5', text: MONTHS },
    { qty: '10', text: MONTHS },
    { qty: '100', text: MONTHS },
    { qty: 'more', text: NEED_MORE },
  ];

  return (
    <FormButtonsWrapper>
      {buttonsDetails.map((button) => (
        <FormButtonsItem
          {...button}
          key={button.qty}
          current={current}
          bindedInputFunctions={bindedInputFunctions}
        />
      ))}
    </FormButtonsWrapper>
  );
};

export default FormButtons;
