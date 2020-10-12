import React from 'react';
import { FormInput } from './styles';

const Input = ({ type = 'text', onChange, ...otherProps }) => {
  return <FormInput {...otherProps} />;
};

export default Input;
