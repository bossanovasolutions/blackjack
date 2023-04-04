import styled, { css } from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

type TextProps = {
  theme: DefaultTheme;
  size: number;
  color: keyof DefaultTheme['colors'];
  mv: number;
  mh: number;
  bold: boolean;
  underlined: boolean;
  align: string;
  lh?: number;
  mt: number;
};

export const BaseText = styled.Text`
  ${({ theme, mv, mh, align = 'center' }) => css`
    margin-vertical: ${theme.metrics.px(mv || 0)}px;
    margin-horizontal: ${theme.metrics.px(mh || 0)}px;
    text-align: ${align};
  `}
`;

export const Title = styled(BaseText)`
  ${({ theme, size = 22, color = 'grey900' }: TextProps) => css`
    font-size: ${theme.metrics.px(size)}px;
    color: ${theme.colors[color]};
    font-family: ${theme.fonts.bold};
  `}
`;

export const SubTitle = styled(BaseText)`
  ${({ theme, size = 16, color = 'black', bold = false }: TextProps) => css`
    font-size: ${theme.metrics.px(size)}px;
    color: ${theme.colors[color]};
    font-family: ${bold ? theme.fonts.bold : theme.fonts.regular};
  `}
`;

export const Text = styled(BaseText)`
  ${({ theme, size = 12, color = 'black', bold = false }: TextProps) => css`
    font-size: ${theme.metrics.px(size)}px;
    color: ${theme.colors[color]};
    font-family: ${bold ? theme.fonts.bold : theme.fonts.regular};
  `}
`;

export const TextJustify = styled(BaseText)`
  ${({ theme, size = 12, color = 'black', bold = false }) => css`
    font-size: ${theme.metrics.px(size)}px;
    color: ${theme.colors[color]};
    font-family: ${bold ? theme.fonts.semibold : theme.fonts.regular};
    text-align: justify;
  `}
`;

export const Disclaimer = styled(BaseText)`
  ${({
    theme,
    size = 9,
    color = 'black',
    lh,
    bold = false,
    align = 'justify',
    mt,
  }: TextProps) => css`
    font-size: ${theme.metrics.px(size)}px;
    color: ${theme.colors[color]};
    margin-top: ${theme.metrics.px(15)}px;
    line-height: ${theme.metrics.px(lh || 9)}px;
    font-family: ${bold ? theme.fonts.bold : theme.fonts.regular};
    margin-top: ${theme.metrics.px(mt || 0)}px;
    text-align: ${align};
  `}
`;

export const Link = styled(BaseText)`
  ${({
    theme,
    size = 12,
    color = 'black',
    bold = false,
    underlined = false,
    align = 'center',
  }: TextProps) => css`
    font-size: ${theme.metrics.px(size || 12)}px;
    color: ${theme.colors[color]};
    font-family: ${bold ? theme.fonts.semibold : theme.fonts.regular};
    text-decoration-line: ${underlined && 'underline'};
    text-align: ${align};
  `}
`;

export const Badge = styled.Text`
  ${({ theme, color = 'primary' }: Pick<TextProps, typeof color>) => css`
    background-color: ${theme.colors[color]};
    border-radius: ${theme.metrics.px(4)}px;
    padding: ${theme.metrics.px(6)}px ${theme.metrics.px(10)}px;
    font-size: ${theme.metrics.px(11)}px;
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.white};
  `}
`;
