import styled, { css, DefaultTheme } from 'styled-components/native';
import { theme } from '@theme';
import { BaseText } from '../Text/Text';

export type ButtonVariants = 'default' | 'dark' | 'disabled' | 'outlineDefault';

type ButtonContainerProps = {
  theme: DefaultTheme;
  color?: keyof DefaultTheme['colors'];
  mv?: number;
  mh?: number;
  variant: ButtonVariants;
  full?: boolean;
  disabled?: boolean;
};

const variants: Record<ButtonVariants, any> = {
  default: {
    background: theme.colors.primary500,
    color: theme.colors.white,
    borderColor: theme.colors.primary500,
  },
  outlineDefault: {
    background: 'transparent',
    color: theme.colors.black,
    borderColor: theme.colors.primary500,
  },
  dark: {
    background: theme.colors.grey900,
    color: theme.colors.white,
  },
  disabled: {
    background: theme.colors.grey400,
    color: theme.colors.white,
    borderColor: theme.colors.grey400,
  },
};

const disableOrVariant = (disabled, value) => {
  let variant = value;
  if (disabled) {
    variant = 'disabled';
  }

  return variants[variant];
};

export const ButtonContainer = styled.TouchableOpacity`
  ${({
    mv,
    mh,
    variant = 'default',
    full = false,
    disabled = false,
  }: ButtonContainerProps) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${disableOrVariant(disabled, variant).background};
    min-height: ${theme.metrics.px(42)}px;
    max-height: ${theme.metrics.px(42)}px;
    margin-vertical: ${theme.metrics.px(mv || 0)}px;
    margin-horizontal: ${theme.metrics.px(mh || 0)}px;
    padding-horizontal: ${theme.metrics.px(16)}px;
    width: ${full ? '100%' : 'auto'};
    flex: ${full ? '1' : '0 1 auto'};
    border-color: ${disableOrVariant(disabled, variant).borderColor};
    border-width: 1px;
  `}
`;

export const ButtonText = styled(BaseText)`
  ${({
    variant = 'default',
  }: {
    theme: DefaultTheme;
    variant: ButtonVariants;
  }) => css`
    font-size: ${theme.metrics.px(14)}px;
    color: ${variants[variant].color};
    font-family: ${theme.fonts.semibold};
  `}
`;

export const IconContainer = styled.View`
  margin-right: ${theme.metrics.px(15)}px;
`;

export const Align = styled.View``;
