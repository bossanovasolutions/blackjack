import Styled, { css } from 'styled-components/native';

export const Cell = Styled.Text`
${({ theme, length }) => css`
  flex: 1;
  height: ${length < 7 ? theme.metrics.px(48) : theme.metrics.px(48)}px;
  line-height: ${length < 7 ? theme.metrics.px(48) : theme.metrics.px(46)}px;
  font-size: ${length < 7 ? theme.metrics.px(32) : theme.metrics.px(32)}px;
  color: ${theme.colors.black700}
  border-width: 1px;
  border-color: ${theme.colors.grey300};
  text-align: center;
  margin-horizontal: ${
    length < 7 ? theme.metrics.px(5) : theme.metrics.px(2)
  }px;
  font-family: ${theme.fonts.bold};
`}
`;
