import styled from 'styled-components';
import { colorBlackLight, colorRed, colorWhite } from '../../../../styles/variables/colors';
import { Switch } from 'antd';

export const FormSwitchWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .ant-switch-handle {
    width: 28px;
    height: 28px;
    left: calc(100% - 28px - 2px);

    &:before {
      border-radius: 50%;
    }
  }
`;

export const FormSwitch = styled(Switch)`
  background: ${colorRed};
  height: 32px;
  line-height: 32px;
  min-width: 54px;
  margin-right: 10px;
`;
