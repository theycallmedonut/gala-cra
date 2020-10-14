import React from 'react';
import { FormInput } from './styles';

const Input = ({ type = 'text', ...otherProps }) => {
  return <FormInput type={type} {...otherProps} />;
};

export default Input;
