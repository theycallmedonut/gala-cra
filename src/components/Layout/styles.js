import styled from 'styled-components';
import trophiesMobile from '../../images/trophies-mobile.svg';
import { Container } from '../../styles/common';

export const LayoutWrapper = styled(Container)`
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
