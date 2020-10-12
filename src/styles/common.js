import styled, { css } from 'styled-components';
import { maxWidth, minWidth } from './mixins';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};

  ${minWidth.phone`
    padding: 0 48px;
  `}

  ${maxWidth.phone`
    padding: 0 20px;
  `}
`;

export const PageWrapper = styled.div`
  padding-top: 5px;
  padding-bottom: 15px;
  background-color: ${({ pageBackgroundColor }) =>
    pageBackgroundColor || 'transparent'};

  ${minWidth.phone`
    padding-top: 15px;
    padding-bottom: 15px;
  `}

  ${maxWidth.tablet`
    padding-bottom: 0;
  `}
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;

export const Grid = styled.div`
  display: flex;
  margin-left: -10px;
  margin-right: -10px;

  ${minWidth.tablet`
    margin-left: -24px;
    margin-right: -24px;
  `}

  ${maxWidth.tablet`
    flex-wrap: wrap;
  `}
`;

export const GridItem = styled.div`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  ${minWidth.tablet`
    width: ${({ width }) => width || '50%'};
    padding-left: 24px;
    padding-right: 24px;

     ${({ hideOnDesktop }) =>
       hideOnDesktop &&
       css`
         display: none;
       `}
  `}

  ${maxWidth.tablet`
    ${({ hideOnMobile }) =>
      hideOnMobile &&
      css`
        display: none;
      `}

    ${({ mobileFirst }) =>
      mobileFirst &&
      css`
        order: -1;
      `}
  `}
`;

export const StickyContaner = styled.div`
  position: sticky;
  top: ${({ top }) => top || '15px'};

  ${maxWidth.phone`
    position: static;
  `}
`;
