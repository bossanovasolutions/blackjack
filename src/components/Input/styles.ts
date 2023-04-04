import { theme as baseTheme } from '@theme';
import styled, { css } from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';
import MaskInput from 'react-native-mask-input';

type InputContainerProps = {
  theme: DefaultTheme;
  size?: number;
  round?: boolean;
  error?: boolean;
  large?: boolean;
  numberOfLines?: number;
};

export const InputContainer = styled.View`
  ${({
    theme,
    size,
    round = true,
    error = false,
    numberOfLines = 1,
  }: InputContainerProps) => css`
    flex-direction: row;
    align-items: ${numberOfLines > 1 ? 'flex-start' : 'center'};
    background-color: ${theme.colors.white};
    width: ${size || '100%'};
    min-height: ${theme.metrics.px(numberOfLines * 48)}px;
    max-height: ${theme.metrics.px(numberOfLines * 48)}px;
    flex: 1;
    padding: ${theme.metrics.px(8)}px;
    border-width: ${theme.metrics.px(0.5)}px;
    border-color: ${error ? theme.colors.red : theme.colors.grey400};
    border-radius: ${theme.metrics.px(round ? 2 : 0)}px;
  `}
`;

export const IconContainer = styled.View`
  ${({ theme }: { theme: DefaultTheme }) => css`
    // padding-right: ${theme.metrics.px(8)}px;
  `}
`;

export const BaseInput = styled(MaskInput).attrs({
  placeholderTextColor: baseTheme.colors.grey300,
})`
  ${({
    theme,
    editable = true,
    bold = false,
  }: {
    theme: DefaultTheme;
    editable: boolean;
    bold: boolean;
  }) => css`
    flex: 1;
    text-align: left;
    font-family: ${bold ? theme.fonts.bold : theme.fonts.regular};
    font-size: ${theme.metrics.px(14)}px;
    color: ${editable ? theme.colors.black : theme.colors.grey500};
    padding-left: 5px;
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
    margin-vertical: ${theme.metrics.px(mv || 0)}px;
    margin-horizontal: ${theme.metrics.px(mh || 0)}px;
  `}
`;
