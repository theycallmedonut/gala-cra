import styled from 'styled-components';
import goldLabelSvg from '../../images/gold-label.svg';

export const GoldLabelWrapper = styled.div`
  background: url('${goldLabelSvg}');
  width: 265px;
  height: 61px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2;
`;

export const GoldLabelTitle = styled.div`
    font-size: 16px;
`;

export const GoldLabelDescription = styled.div`
  font-size: 14px;
`;