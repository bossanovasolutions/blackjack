import styled, { css } from 'styled-components/native';

export const ScreenContainer = styled.ImageBackground`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: ${theme.metrics.px(80)}px;
    margin-bottom: ${theme.metrics.px(140)}px;
    margin-top: ${theme.metrics.px(50)}px;
    padding-horizontal: 16px;
  `}
`;

export const TextContainer = styled.View`
  display: flex;
  width: 55%;
`;
