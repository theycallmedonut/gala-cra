import styled from 'styled-components';
import { Tabs } from 'antd';
import { colorBlack, colorRed } from '../variables/colors';

const { TabPane } = Tabs;

export const TabsWrapper = styled(Tabs)`
  width: 100%;
  overflow-x: visible;
  overflow-y: visible;

  .ant-tabs-nav-list {
    width: 100%;
  }

  .ant-tabs-tabpane {
    width: 100%;
  }

  .ant-tabs-tab {
    width: 50%;
    margin: 0;
    justify-content: center;
    text-transform: uppercase;
    color: ${colorBlack};
    font-size: 16px;
  }

  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${colorRed};
  }

  .ant-tabs-nav::before,
  .ant-tabs-nav::after {
    border-color: ${colorBlack};
  }

  .ant-tabs-ink-bar {
    background: ${colorRed};
  }
`;

export const TabsItem = styled(TabPane)`
  width: 50%;
`;
