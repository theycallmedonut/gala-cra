import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { CardsWrapper } from './styles';
import CardsList from './components/CardsList';
import { fetchCardsAction } from '../../redux/actions/basic';

const { TabPane } = Tabs;

const Cards = ({ getCards, cards }) => {
  useEffect(() => {
    if (!cards.length) getCards();
  }, [cards]);

  return (
    <CardsWrapper type="card">
      {cards.map((list) => (
        <TabPane key={list.title} tab={list.title}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
