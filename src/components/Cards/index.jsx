import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { CardsWrapper } from './styles';
import CardsList from './components/CardsList';
import { fetchCardsAction } from '../../redux/actions/basic';

const { TabPane } = Tabs;

const Cards = ({ getCards, cards, t }) => {
  useEffect(() => {
    if (!cards.length) getCards();
  }, [cards]);

  return (
    <CardsWrapper type="card">
      {cards.map((list) => (
        <TabPane key={list.title} tab={t(list.title)}>
          <CardsList {...list} />
        </TabPane>
      ))}
    </CardsWrapper>
  );
};

const mapStateToProps = ({ basic }) => ({
  cards: basic.cards,
});

const mapDispatchToProps = {
  getCards: fetchCardsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Cards));
