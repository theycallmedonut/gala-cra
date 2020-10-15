import React, { useCallback, useMemo, useState } from 'react';
import { Col, Row } from 'antd';
import { connect } from 'react-redux';

// Styles
import { CardsListWrapper } from '../styles';

// Components
import CardsListItem from './CardsListItem';

const CardsList = ({ title, list, isMobile }) => {
  const getChunk = useCallback(() => {
    const containerWidth = window.innerWidth - 30;
    const itemWidth = isMobile ? 156 + 10 : 180 + 10;

    return Math.floor(containerWidth / itemWidth);
  }, [isMobile, window.innerWidth]);

  const columns = useMemo(() => {
    const chunk = getChunk();
    const result = [];

    for (let i = 0, j = list.length; i < j; i += chunk) {
      result.push(list.slice(i, i + chunk));
    }

    return result;
  }, [list, isMobile]);

  return (
    <CardsListWrapper tab={title}>
      {columns.map((row, i) => (
        <Row key={i} gutter={10}>
          {row.map((card, i2) => (
            <Col key={i2}>
              <CardsListItem {...card} />
            </Col>
          ))}
        </Row>
      ))}
    </CardsListWrapper>
  );
};

const mapStateToProps = ({ basic }) => ({
  isMobile: basic.isMobile,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
