import styled, { css } from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

export const InputContainer = styled.View`
  ${({ theme, minH, maxH, mt, error = false }) => css`
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    min-height: ${theme.metrics.px(minH || 48)}px;
    max-height: ${theme.metrics.px(maxH || 48)}px;
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(10)}px;
    border-width: ${theme.metrics.px(0.5)}px;
    border-color: ${error ? theme.colors.red : theme.colors.grey400};
    background-color: ${theme.colors.white};
    border-radius: ${theme.metrics.px(2)}px;
  `}
`;

export const DatepickerLabel = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.metrics.px(32)}px;
    background-color: ${theme.colors.white};
    align-items: center;
    justify-content: center;
    padding-horizontal: ${theme.metrics.px(8)}px;
  `}
`;

export const DatepickerContent = styled.Text`
  ${({ theme, placeholder }) => css`
    color: ${placeholder ? theme.colors.grey500 : theme.colors.black};
    font-size: ${theme.metrics.px(14)}px;
    width: 100%;
  `}
`;

export const InputWrapper = styled.View`
  ${({
    theme,
    mv,
    mh,
  }: {
    theme: DefaultTheme;
    mv?: number;
    mh?: number;
  }) => css`
    flex: 1;
    width: 100%;
    margin-vertical: ${theme.metrics.px(mv || 10)}px;
    margin-horizontal: ${theme.metrics.px(mh || 0)}px;
  `}
`;
