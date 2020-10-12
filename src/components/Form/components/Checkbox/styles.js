import styled, { css } from 'styled-components';
import checkbox from '../../../../images/checkbox.svg';
import { colorBlackLight, colorRed, colorWhite } from '../../../../styles/variables/colors';
import { Checkbox } from 'antd';
import {secondaryFont} from '../../../../styles/variables/fonts';

export const CheckboxWrapper = styled.div``;

export const CheckboxBlock = styled(Checkbox)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
    
  .ant-checkbox-wrapper:hover .ant-checkbox-inner, 
  .ant-checkbox:hover .ant-checkbox-inner, 
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${colorRed};
  }
    
  .ant-checkbox-checked {
    position:relative;
    
    &:after {
      border-color: transparent;
    }
    
    .ant-checkbox-inner {
      border-color: transparent!important;
    
      &:after {
        content: '';
        position: absolute;
        top: -2px;
        left: 1px;
        width: 31px;
        height: 24px;
        background: url('${checkbox}');
        border: 0;
        transform: none;
      }
    }
  }
  
  .ant-checkbox-inner {
    background: ${colorWhite};
    border-color: transparent;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    position:relative;
    width: 22px;
    height: 24px;
    margin-right: 10px;
  }
`;

export const CheckboxTitle = styled.div`
  line-height: 1.2;
  margin-top: 3px;
  font-family: ${secondaryFont};
`;
