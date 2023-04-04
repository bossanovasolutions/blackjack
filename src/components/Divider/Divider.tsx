import { Text } from '../Text/Text';
import { DividerBar, DividerContainer } from './styles';

type DividerProps = {
  text?: string;
  mv?: number;
  size?: number;
};

const Divider = ({ text, mv, size }: DividerProps) => (
  <DividerContainer mv={mv} size={size}>
    <DividerBar />
    {text && (
      <Text mh={12} color="grey300" size={14}>
        {text}
      </Text>
    )}
    <DividerBar />
  </DividerContainer>
);

export { Divider };
