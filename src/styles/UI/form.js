import styled, { css } from 'styled-components';
import logo from '../../images/logo.svg';
import { primaryFont } from '../variables/fonts';
import { minWidth, maxWidth } from '../mixins';
import { Container } from '../common';

const textStyles = css`
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
`;

export const FormWrapper = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto 20px;
  padding: 48px 20px 90px;
  box-sizing: border-box;
  min-height: 530px;
  
  ${maxWidth.tablet`
    width: 320px;
  `}
  ${minWidth.tablet`
    width: 460px;
  `}
  
  .ant-form {
    width: 100%;
  }
  .ant-form-item {
    margin-bottom: 12px;
  }
  
  
  
  
  // &:after {
  //   content: '';
  //   position: absolute;
  //   bottom: 20px;
  //   right: 20px;
  //   width: 45px;
  //   height: 60px;
  //   background: url('${logo}') center center/60px auto no-repeat;
  // }

  > * {
    position:relative;
    box-sizing: border-box;
    font-family: ${primaryFont};
  }
`;

export const FormTitle = styled.div`
  ${textStyles};
  font-size: 20px;
  margin: 0 auto 10px;
  width: 230px;

  ${minWidth.tablet`
    width: calc(100% + 100px);
    margin: 0 -50px 10px;
  `};
`;

export const FormSubtitle = styled(FormTitle)`
  font-weight: bold;
  margin-bottom: 0;
`;
