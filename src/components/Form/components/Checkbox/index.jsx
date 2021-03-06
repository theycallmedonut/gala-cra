import React from 'react';
import { CheckboxBlock, CheckboxTitle } from './styles';

const Checkbox = ({ label, ...props }) => {
  return (
    <CheckboxBlock {...props} className="checkbox">
      <CheckboxTitle>{label}</CheckboxTitle>
    </CheckboxBlock>
  );
};

export default Checkbox;
