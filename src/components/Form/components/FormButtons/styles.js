import styled from 'styled-components';
import { colorBlack, colorRed, colorWhite } from '../../../../styles/variables/colors';

export const FormButtonsWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  padding: 18px 36px;
`;

export const FormButtonsItemWrapper = styled.div`
  width: 92px;
  height: 66px;
  margin: 6px;
  border-radius: 10px;
  background: ${({ isActive }) => (isActive ? colorRed : colorWhite)};
  color: ${({ isActive }) => (isActive ? colorWhite : colorBlack)};
  text-transform: uppercase;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.15));

  b {
    display: block;
    font-size: 25px;
    line-height: 1;
  }
`;
