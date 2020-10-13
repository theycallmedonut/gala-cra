import React from 'react';
import { GoldLabelWrapper, GoldLabelTitle, GoldLabelDescription } from './styles';

const GoldLabel = ({ className, title, date }) => {
  return (
    <GoldLabelWrapper className={className}>
      <GoldLabelTitle>{title}</GoldLabelTitle>
      <GoldLabelDescription>{date}</GoldLabelDescription>
    </GoldLabelWrapper>
  );
};

export default GoldLabel;
