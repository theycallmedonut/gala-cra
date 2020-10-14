import React, { useCallback, useMemo, useState } from 'react';
import { CardsListWrapper } from '../styles';
import CardsListItem from './CardsListItem';
import { Col, Row } from 'antd';

const CardsList = ({ title, list }) => {
  const columns = useMemo(() => {
    let chunk = 2;
    const result = [];

    for (let i = 0, j = list.length; i < j; i += chunk) {
      result.push(list.slice(i, i + chunk));
    }

    return result;
  }, [list]);

  return (
    <CardsListWrapper tab={title}>
      {columns.map((row, i) => (
        <Row key={i} gutter={10}>
          {row.map((card) => (
            <Col key={card.title}>
              <CardsListItem {...card} />
            </Col>
          ))}
        </Row>
      ))}
    </CardsListWrapper>
  );
};

export default CardsList;
