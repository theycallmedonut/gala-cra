import styled from 'styled-components';
import { colorBlack } from '../../styles/variables/colors';
import trophiesMobile from '../../images/trophies-mobile.svg';

export const LayoutWrapper = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    z-index: -2;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background: url(${trophiesMobile}) center top no-repeat;
  }
`;
