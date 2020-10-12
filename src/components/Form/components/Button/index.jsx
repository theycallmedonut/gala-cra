import React from 'react';
import { FormButton } from './styles';

const Button = ({ children, ...otherProps }) => {
  return <FormButton {...otherProps}>{children}</FormButton>;
};

export default Button;
