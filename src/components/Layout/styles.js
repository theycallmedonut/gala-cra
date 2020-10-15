import styled from 'styled-components';

// Styles
import { Container } from '../../styles/common';
import { minWidth, maxWidth } from '../../styles/mixins';

// Images
import trophiesMobile from '../../images/trophies-mobile.svg';
import trophiesDesktop from '../../images/trophies-desktop.svg';

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

    ${minWidth.desktop`
      background: url(${trophiesMobile}) center top no-repeat;
    `}

    ${maxWidth.desktop`
      background: url(${trophiesDesktop}) center top no-repeat;
      top: 0;
    `}
  }
`;
