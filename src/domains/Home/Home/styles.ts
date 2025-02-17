import styled, { css } from 'styled-components/native';

export const ScreenContainer = styled.SafeAreaView`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.backgroundLight};
  `}
`;

export const ContentContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-horizontal: ${theme.metrics.px(16)}px;
  `}
`;

export const ButtonContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: ${theme.metrics.px(16)}px;
    margin-top: ${theme.metrics.px(32)}px;
  `}
`;

export const HandContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.metrics.px(16)}px;
    margin-top: ${theme.metrics.px(32)}px;
  `}
`;

export const CardContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    gap: ${theme.metrics.px(8)}px;
  `}
`;

export const GameOverContainer = styled.View`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    height: ${theme.metrics.hp(100)}px;
    width: ${theme.metrics.wp(100)}px;
    background-color: #069;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  `}
`;
