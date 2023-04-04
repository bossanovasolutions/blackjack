import styled, { css } from 'styled-components/native';

export const RadioGroupContainer = styled.View`
  ${({ theme, mv }) => css`
    display: flex;
    flex-direction: row;
    margin-vertical: ${theme.metrics.px(mv || 0)}px;
    min-height: ${theme.metrics.px(48)}px;
    max-height: ${theme.metrics.px(48)}px;
    flex: 1;
  `}
`;

export const RadioButtonContainer = styled.TouchableOpacity`
  ${({ theme, active }) => css`
    background-color: ${active ? theme.colors.primary : theme.colors.primary50};
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 25%;
    padding-horizontal: ${theme.metrics.px(8)}px;
  `}
`;
