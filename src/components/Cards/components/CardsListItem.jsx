import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  CardsListItemWrapper,
  CardType,
  CardQty,
  CardWrapper,
  CardGoldLabel,
  CardMonth,
} from '../styles';

const CardsListItem = ({ title, date, qty, t }) => {
  return (
    <CardsListItemWrapper>
      <CardWrapper>
        <CardType>{t('PREMIUM_MEMBER')}</CardType>
        {/* <CardQty>{qty}</CardQty> */}
        <CardQty>{Math.floor(Math.random() * (60 - 5) + 5)}</CardQty>
        <CardMonth>{t(qty === 1 ? 'MONTH' : 'MONTHS')}</CardMonth>
      </CardWrapper>
      <CardGoldLabel title={title} date={date} />
    </CardsListItemWrapper>
  );
};

export default withTranslation()(CardsListItem);
