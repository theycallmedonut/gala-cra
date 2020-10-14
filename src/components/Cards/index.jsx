import React, { useCallback, useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { CardsWrapper } from './styles';
import CardsList from './components/CardsList';
import { getList, getListApi } from '../../api';
import { connect } from 'react-redux';
import { fetchCardsAction } from '../../redux/actions/cards';

const { TabPane } = Tabs;

const Cards = ({ getCards, cards }) => {
  useEffect(() => {
    getCards();
  }, []);

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

const mapStateToProps = ({ cards }) => ({
  cards: cards.list,
});

const mapDispatchToProps = {
  getCards: fetchCardsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
