import styled, { css } from 'styled-components/native';

export const LogoImage = styled.Image`
  ${({ theme, mt, mb }) => css`
    height: ${theme.metrics.px(18)}px;
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    width: 64%;
    resizemode: cover;
  `}
`;
