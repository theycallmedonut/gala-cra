import React from 'react';
import {GoldLabelWrapper, GoldLabelTitle, GoldLabelDescription} from './styles';

const GoldLabel = ({title, date}) => {
  return (
    <GoldLabelWrapper>
      <GoldLabelTitle>{title}</GoldLabelTitle>
      <GoldLabelDescription>{date}</GoldLabelDescription>
    </GoldLabelWrapper>
  );
};

export default GoldLabel;
