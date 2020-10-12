import React from 'react';
import { FormSwitch, FormSwitchWrapper } from './styles';

const Button = ({ children, label, ...otherProps }) => {
  return (
    <FormSwitchWrapper>
      <FormSwitch {...otherProps} />
      {label}
    </FormSwitchWrapper>
  );
};

export default Button;
