import React from 'react';
import { withTranslation } from 'react-i18next';
import { FormButtonsWrapper } from './styles';
import FormButtonsItem from './components/FormButtonsItem';

const FormButtons = ({ bindedInputFunctions, current, t }) => {
  const buttonsDetails = [
    { qty: '5', text: t('MONTHS') },
    { qty: '10', text: t('MONTHS') },
    { qty: '100', text: t('MONTHS') },
    { qty: 'more', text: t('NEED_MORE') },
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

export default withTranslation()(FormButtons);
