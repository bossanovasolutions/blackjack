import styled, { css } from 'styled-components/native';
import { BaseText } from '@components';

export const ScreenContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.backgroundLight};
    width: 100%;
    height: 100%;
    padding-horizontal: 16px;
    padding-top: ${theme.metrics.px(80)}px;
    padding-bottom: ${theme.metrics.px(40)}px;
  `}
`;

export const ContentContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: ${theme.metrics.px(20)}px;
  `}
`;

export const InputContainer = styled.View`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    margin-vertical: ${theme.metrics.px(4)}px;
    margin-top: ${theme.metrics.px(30)}px;
    margin-bottom: ${theme.metrics.px(20)}px;
  `}
`;

export const SubtitleContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: column;
    margin-bottom: ${theme.metrics.px(16)}px; ;
  `}
`;

export const Title = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(22)}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.black700};
    line-height: 32px;
    margin-horizontal: ${theme.metrics.px(42)}px;
    margin-bottom: ${theme.metrics.px(6)}px;
  `}
`;

export const Text = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(12)}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.black700};
    line-height: 16px;
  `}
`;

export const Link = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(12)}px;
    color: ${theme.colors.primary700};
    font-family: ${theme.fonts.bold};
    text-decoration-line: none;
  `}
`;

export const Bold = styled(BaseText)`
  ${({ theme }) => css`
    flex: none;
    font-size: ${theme.metrics.px(12)}px;
    font-family: ${theme.fonts.bold};
    line-height: 16px;
  `}
`;

export const ButtonContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: ${theme.metrics.px(20)}px;
  `}
`;

export const ErrorContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: column;
    margin-bottom: ${theme.metrics.px(16)}px; ;
  `}
`;

export const Error = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(12)}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.red};
    line-height: 16px;
  `}
`;
