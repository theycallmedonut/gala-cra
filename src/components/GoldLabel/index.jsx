import React from 'react';
import { GoldLabelWrapper, GoldLabelTitle, GoldLabelDescription } from './styles';

const GoldLabel = ({ className, title, date, style }) => {
  return (
    <GoldLabelWrapper className={className} style={style}>
      <GoldLabelTitle>{title}</GoldLabelTitle>
      <GoldLabelDescription>{date}</GoldLabelDescription>
    </GoldLabelWrapper>
  );
};

export default GoldLabel;
