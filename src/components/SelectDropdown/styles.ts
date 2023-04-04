import styled, { css } from 'styled-components/native';

export const SelectListContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    height: ${theme.metrics.px(48)}px;
    flex-direction: row;
    background-color: ${theme.colors.white};
    padding-horizontal: ${theme.metrics.px(20)}px;
    margin-horizintal: ${theme.metrics.px(20)}px;
    font-size: ${theme.metrics.px(18)}px;
    border: ${theme.metrics.px(1)}px solid ${theme.colors.grey400};
    align-items: center;
  `}
`;

export const IconContainer = styled.View`
  width: 17%;
  align-items: center;
  justify-content: center;
`;

export const OptionsContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    font-size: ${theme.metrics.px(18)}px;
    border: ${theme.metrics.px(1)}px solid ${theme.colors.grey400};
  `}
`;

export const CurrentContainer = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Option = styled.TouchableOpacity`
  ${({ theme }) => css`
    height: ${theme.metrics.px(48)}px;
    background-color: ${theme.colors.white};
    flex-direction: row;
    font-size: ${theme.metrics.px(18)}px;
    align-items: center;
    padding-horizontal: ${theme.metrics.px(20)}px;
  `}
`;

export const OptionSelected = styled(Option)`
  ${({ theme }) => css`
    background-color: ${theme.colors.grey50};
  `}
`;
