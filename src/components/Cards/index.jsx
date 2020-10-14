import React from 'react';
import { Tabs } from 'antd';
import { CardsWrapper } from './styles';
import CardsList from './components/CardsList';

const { TabPane } = Tabs;

const cardsLists = [
  {
    title: 'Most donated',
    list: [
      {
        title: '0from Ultraslan community',
        date: ' 2 September 2020',
        qty: 23,
      },
      {
        title: '1from Ultraslan community',
        date: ' 2 September 2020',
        qty: 20,
      },
      {
        title: '2from Ultraslan community',
        date: ' 2 September 2020',
        qty: 2,
      },
      {
        title: '3from Ultraslan community',
        date: ' 2 September 2020',
        qty: 30,
      },
    ],
  },
  {
    title: 'Most recent',
    list: [
      {
        title: 'from Ultraslan community',
        date: ' 2 September 2020',
        qty: 230,
      },
    ],
  },
];

const Cards = () => {
  return (
    <CardsWrapper type="card">
      {cardsLists.map((list) => (
        <TabPane key={list.title} tab={list.title}>
          <CardsList {...list} />
        </TabPane>
      ))}
    </CardsWrapper>
  );
};

export default Cards;
