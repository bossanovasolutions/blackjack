import styled, { css, DefaultTheme } from 'styled-components/native';

type HeaderProps = {
  theme: DefaultTheme;
  mb: number;
  mt: number;
  ph: number;
  w: string;
  absolute: boolean;
  align: boolean;
};

export const HeaderContainer = styled.SafeAreaView`
  ${({ theme, mt, mb, absolute, ph, w, align }: HeaderProps) => css`
    width: ${w || '100%'};
    display: flex;
    flex-direction: row;
    align-items: ${align ? 'center' : 'flex-end'};
    justify-content: ${align ? 'space-between' : 'flex-start'};
    height: ${theme.metrics.px(63)}px;
    padding-horizontal: ${theme.metrics.px(ph || 0)}px;
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    margin-horizontal: ${theme.metrics.px(15)}px;
    position: ${absolute ? 'absolute' : 'relative'};
    z-index: ${absolute ? 100 : 0};
  `}
`;

export const ImgContainer = styled.View`
  width: 50%;
  justify-content: flex-start;
  align-items: flex-start;
  top: -8px;
  margin-left: ${({ theme }) => theme.metrics.px(22)}px;
`;

export const Img = styled.Image`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.metrics.px(40)}px;
  `}
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
