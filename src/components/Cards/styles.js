import styled from 'styled-components';
import { Tabs } from 'antd';
import { colorBlackLight, colorRed, colorWhite } from '../../styles/variables/colors';
import { secondaryFont } from '../../styles/variables/fonts';
import { minWidth } from '../../styles/mixins';

import cardBgXs from '../../images/cards/mobile/card-bg-xs.png';
import GoldLabel from '../GoldLabel';

export const CardsWrapper = styled(Tabs)`
  position: relative;
  margin: 30px auto;

  ${minWidth.desktop`
    margin-top: 50px;
  `};

  .ant-row {
    background: linear-gradient(0deg, #979797 -2.35%, rgba(151, 151, 151, 0) 97.83%);
    background-position: 0 10px;
    background-size: 100% 130px;
    background-repeat: no-repeat;
    justify-content: center;
    width: 100%;
  }

  .ant-tabs-content {
    position: relative;
    z-index: 0;

    &:after {
      content: '';
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: 100%;
      //box-shadow: inset 0 0 70px 40px rgba(0, 0, 0, 0.5);
      background: linear-gradient(
        90deg,
        #111111 0.04%,
        rgba(17, 17, 17, 0) 35.39%,
        rgba(17, 17, 17, 0) 64.48%,
        #111111 99.96%
      );
    }
  }
  .ant-tabs-nav-list {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 45px;
    background: rgba(224, 225, 228, 0.9);

    .ant-tabs-tab {
      margin: 0;
      padding: 20px;
      border-radius: 45px;
      background: none;
      border: 0;

      &.ant-tabs-tab-active {
        background: ${colorWhite};
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        border-radius: 45px;

        > .ant-tabs-tab-btn {
          color: ${colorRed};
        }
      }

      > .ant-tabs-tab-btn {
        font-size: 16px;
        line-height: 1;
        font-weight: bold;
        color: ${colorBlackLight};
        font-family: ${secondaryFont};
      }
    }
  }

  .ant-tabs-nav:before {
    content: none;
  }

  .ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
    align-items: center;

    &:before,
    &:after {
      content: none;
    }
  }
`;

export const CardsListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardsListItemWrapper = styled.div`
  justify-content: center;
  text-align: center;
`;

export const CardWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  margin-top: 42px;
  width: 155px;
  height: 100px;
  background: url(${cardBgXs}) center center no-repeat;
`;

export const CardType = styled.div`
  text-transform: uppercase;
  color: ${colorRed};
  text-align: right;
  opacity: 0.5;
  font-weight: bold;
  font-size: 11px;
  margin: 5px 8px 0 0;
  padding-top: 5px;
`;

export const CardQty = styled.div`
  font-size: 52px;
  text-align: center;
  line-height: 1;
  font-weight: bold;
  color: ${colorRed};
`;

export const CardMonth = styled.div`
  font-size: 14px;
  line-height: 1;
  color: ${colorRed};
  opacity: 0.5;
  text-transform: uppercase;
  text-align: center;
`;

export const CardGoldLabel = styled(GoldLabel)`
  background-size: cover;
  width: 138px;
  height: 31px;
  margin: 0 auto;
  > * {
    font-size: 10px;
    line-height: 1.2;
  }
`;
