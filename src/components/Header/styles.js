import styled from 'styled-components';
import { colorWhite } from '../../styles/variables/colors';
import trophiesMobile from '../../images/trophies-mobile.svg';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
  color: ${colorWhite};
  overflow-y: visible;
  padding: 0 8px;
`;

export const HeaderLogo = styled.img`
  width: 100px;
  margin: 40px auto 20px;
`;

export const HeaderTitle = styled.div`
  font-size: 30px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const HeaderTotalMonths = styled.div`
  font-size: 60px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 16px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(331.38deg, #e82a00 49.87%, #0f0004 62.54%, #fdb913 67.52%);
    filter: blur(23px);
    border-radius: 19px;
    //transform: rotate(-90deg);
  }
`;

export const HeaderSubtitle = styled.div`
  font-size: 16px;
  line-height: 1;
  margin-bottom: 24px;
`;
