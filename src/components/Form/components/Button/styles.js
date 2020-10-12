import styled from 'styled-components';
import { colorBlackLight, colorRed, colorWhite } from '../../../../styles/variables/colors';
import { Button } from 'antd';

export const FormButton = styled(Button)`
  display: inline-block;
  line-height: 1.2;
  height: auto;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  margin-bottom: 12px;
  padding: 14px 30px;
  font-weight: 700;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ type }) => (type === 'primary' ? colorRed : colorBlackLight)};
  background: ${({ type }) => (type === 'primary' ? colorRed : colorBlackLight)};
  color: ${colorWhite};
  border-radius: 10px;
  width: ${({ type }) => (type === 'primary' ? '100%' : 'auto')};

  &:active,
  &:hover,
  &:focus {
    color: ${colorWhite};
    border-color: ${({ type }) => (type === 'primary' ? colorRed : colorBlackLight)};
    background: ${({ type }) => (type === 'primary' ? colorRed : colorBlackLight)};
  }
`;
