import styled, { css } from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

export const DividerBar = styled.View`
  ${({ theme }: { theme: DefaultTheme }) => css`
    flex: 1;
    height: 1px;
    background-color: ${theme.colors.grey300};
    margin-vertical: ${theme.metrics.px(20)}px;
  `}
`;

export const DividerContainer = styled.View`
  ${({
    theme,
    mv,
    size,
  }: {
    theme: DefaultTheme;
    mv: number;
    size: number;
  }) => css`
    display: flex;
    flex-direction: row;
    width: ${size || 100}%;
    align-items: center;
    margin-vertical: ${theme.metrics.px(mv || 0)}px;
  `}
`;
