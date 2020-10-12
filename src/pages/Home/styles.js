import styled from 'styled-components';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export const LoginTabs = styled(Tabs)`
  .ant-tabs-tab[role='tab'] > div {
    display: flex;
    align-items: center;

    svg {
      opacity: 0.5;
      font-size: 24px;
      margin-right: 0.5em;
    }
  }
`;

export const LoginTabsItem = styled(TabPane)``;
