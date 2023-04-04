import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Cell } from './styles';

type InputCodeProps = {
  length: number;
  value: string;
  onChange: (value: string) => void;
};

const InputCode = ({ length, value, onChange }: InputCodeProps) => {
  const ref = useBlurOnFulfill({ value, cellCount: length });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChange,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={onChange}
      cellCount={length}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Cell
          length={length}
          key={index}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </Cell>
      )}
    />
  );
};

export { InputCode };
