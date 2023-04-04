import styled, { css } from 'styled-components/native';
import { BaseText } from '@components';

export const ScreenContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.backgroundLight};
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-horizontal: 24px;
  `}
`;

export const InputContainer = styled.View`
  ${({ theme, mt }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: ${theme.metrics.px(54)}px;
    margin-top: ${theme.metrics.px(mt || 0)}px;
  `}
`;

export const InfoContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: 80%;
    align-items: center;
    margin-top: ${theme.metrics.px(16)}px;
  `}
`;

export const LinkContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: 80%;
    align-items: center;
    margin-top: ${theme.metrics.px(16)}px;
    margin-bottom: ${theme.metrics.px(32)}px;
  `}
`;

export const LinkPrimary = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(12)}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.primary600};
    line-height: 16px;
  `}
`;

export const Title = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(22)}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.black700};
    line-height: 32px;
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

export const Info = styled(BaseText)`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(12)}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.black700};
    line-height: 16px;
  `}
`;
