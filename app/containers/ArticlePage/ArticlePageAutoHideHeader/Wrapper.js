import styled, { css } from 'styled-components';

export const OuterWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  z-index: 9;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
`;

export const PlaceholderWrapper = styled.div`
  position: relative;
  width: 100%;
  display: none;
`;

export const MiddleDivider = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: 54px;
`;

export const NavWidthConstrain = css`
  max-width: 1320px;
  min-width: 0;
  // width: 100%;
  margin: auto;
  padding: 0 48px;
  @media screen and (max-width: 728px) {
    padding: 0 24px;
  }
  @media screen and (min-width: 1080px) {
    padding: 0 64px;
  }
`;

export const WidthConstrainWrapper = styled.div`
  ${NavWidthConstrain}
`;
