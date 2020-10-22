import styled from 'styled-components';

// Styles
import { minWidth } from '../../styles/mixins';

// Images
import trophiesMobile from '../../images/trophies-mobile.svg';
import trophiesDesktop from '../../images/trophies-desktop.png';

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

    ${minWidth.tablet`
      background: url(${trophiesDesktop}) center top no-repeat;
      top: 0;
    `}
  }
`;
