import styled from 'styled-components';
import { colorBlack, colorWhite } from '../../../../styles/variables/colors';
import { Input } from 'antd';

export const FormInput = styled(Input)`
  width: 100%;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  padding: 14px 10px;
  background: ${colorWhite};
  color: ${colorBlack};
  border-radius: 10px;
  border-color: transparent;
  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.15));
`;
