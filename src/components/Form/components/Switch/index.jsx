import React from 'react';
import { FormSwitch, FormSwitchWrapper } from './styles';

const Switch = ({ children, className, name, label, checked, ...otherProps }) => {
  const { onChange } = otherProps;

  const handleChange = (checked, event) => {
    onChange({ ...event, target: { ...event.target, checked, name, value: '' } });
  };

  return (
    <FormSwitchWrapper checked={checked}>
      <FormSwitch {...otherProps} onClick={() => {}} checked={checked} onChange={handleChange} />
      {label}
    </FormSwitchWrapper>
  );
};

export default Switch;
