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
  return (
    <CardsListItemWrapper>
      <CardWrapper>
        <CardType>{PREMIUM_MEMBER}</CardType>
        {/* <CardQty>{qty}</CardQty> */}
        <CardQty>{Math.floor(Math.random() * (60 - 5) + 5)}</CardQty>
        <CardMonth>{qty === 1 ? MONTH : MONTHS}</CardMonth>
      </CardWrapper>
      <CardGoldLabel title={title} date={date} />
    </CardsListItemWrapper>
  );
};

export default CardsListItem;
