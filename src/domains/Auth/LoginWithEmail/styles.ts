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

export const Text = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(12)}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.black700};
    line-height: 16px;
  `}
`;

export const Title = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(22)}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.black700};
    line-height: 32px;
    margin-horizontal: ${theme.metrics.px(42)}px;
    margin-bottom: ${theme.metrics.px(36)}px;
  `}
`;

export const SubTitle = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.black700};
    line-height: 22px;
  `}
`;

export const InputContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: ${theme.metrics.px(54)}px;
  `}
`;

export const InfoContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 14px;
`;

export const LinkContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 16px;
`;

export const Link = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(12)}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.primary600};
    line-height: 16px;
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
