import styled, { css } from 'styled-components';
import logo from '../../images/logo.svg';
import cardBg from '../../images/card-bg.jpg';
import Input from '../../components/Form/components/Input';
import Index from '../../components/Form/components/Button';
import { colorBlack, colorBlackLight, colorRed, colorWhite } from '../variables/colors';
import { primaryFont } from '../variables/fonts';

const textStyles = css`
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
`;

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  padding: 20px 20px 90px;
  width: 320px;
  box-sizing: border-box;
  border-radius: 20px;
  overflow:hidden;
  background: linear-gradient(132.93deg, #C48D07 30.27%, #AB8417 100%);
  mix-blend-mode: normal;
  
  .ant-form {
    width: 100%;
  }
  .ant-form-item {
    margin-bottom: 12px;
  }
  
  &:before {
    content: '';
    display:block;
    position:absolute;
    z-index: 0;
    opacity: 0.5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-blend-mode: normal;
    
    background: url('${cardBg}') left center/100% 100% no-repeat, linear-gradient(298.18deg, rgba(196, 141, 7, 0.46) 20.7%, rgba(191, 141, 37, 0.05) 76.48%), linear-gradient(180.21deg, rgba(255, 255, 255, 0.33) 0.18%, #C48D07 99.82%), #C48D07;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 60px;
    background: url('${logo}') center center/60px auto no-repeat;
  }

  > * {
    position:relative;
    box-sizing: border-box;
    font-family: ${primaryFont};
  }
`;

export const FormTitle = styled.div`
  ${textStyles};
  font-size: 20px;
  margin-bottom: 10px;
  width: 100%;
`;

export const FormSubtitle = styled.div`
  ${textStyles};
  font-size: 20px;
  font-weight: bold;
  width: 100%;
`;
