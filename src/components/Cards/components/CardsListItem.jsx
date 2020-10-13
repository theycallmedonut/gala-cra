import React from 'react';
import {
  CardsListItemWrapper,
  CardType,
  CardQty,
  CardWrapper,
  CardGoldLabel,
  CardMonth,
} from '../styles';
import { MONTH, MONTHS, PREMIUM_MEMBER } from '../../../constants';

const CardsListItem = ({ title, date, qty }) => {
  console.log('%c::', 'background: #F2BE22; color: #333; border-radius: 5px; padding: 2px 5px;', {
    title,
    date,
  });
  return (
    <CardsListItemWrapper>
      <CardWrapper>
        <CardType>{PREMIUM_MEMBER}</CardType>
        <CardQty>{qty}</CardQty>
        <CardMonth>{qty === 1 ? MONTH : MONTHS}</CardMonth>
      </CardWrapper>
      <CardGoldLabel title={title} date={date} />
    </CardsListItemWrapper>
  );
};

export default CardsListItem;
