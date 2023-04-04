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
