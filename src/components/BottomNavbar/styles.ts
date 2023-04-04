import styled, { css } from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';
import { Text as BaseText } from '../Text/Text';

type ActiveProps = {
  theme: DefaultTheme;
  active?: boolean;
};

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    background-color: ${theme.colors.backgroundLight};
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: ${theme.colors.grey400}
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
  `}
`;

export const Text = styled(BaseText)`
  ${({ theme, active = false }: ActiveProps) => css`
    text-transform: capitalize;
    color: ${active ? theme.colors.primary : theme.colors.grey400};
    font-size: ${theme.metrics.px(10)}px;
    margin-top: ${theme.metrics.px(4)}px;
  `}
`;

export const IconContainer = styled.TouchableOpacity`
  ${({ theme, active = false }: ActiveProps) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 18%;
    padding-top: 10px;
    color: ${active ? theme.colors.black : theme.colors.grey500};
  `}
`;
