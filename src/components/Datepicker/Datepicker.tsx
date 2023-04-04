import { useState } from 'react';
import DatePicker, { DatePickerProps } from 'react-native-date-picker';
import {
  DatepickerLabel,
  DatepickerContent,
  InputContainer,
  InputWrapper,
} from './styles';
import { Text } from '../Text/Text';

type PickerProps = DatePickerProps & {
  onConfirm: (date: Date) => void;
  minH?: number;
  maxH?: number;
  error?: boolean;
  errorMessage?: string;
  mv?: number;
  mh?: number;
};

export const Datepicker = ({
  date,
  minH,
  maxH,
  onConfirm,
  error,
  errorMessage,
  mv,
  mh,
  ...props
}: PickerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <InputWrapper mv={mv} mh={mh}>
      <InputContainer minH={minH} maxH={maxH} error={error}>
        <DatepickerLabel onPress={() => setOpen(true)}>
          <DatepickerContent placeholder={!date}>
            {(date && date.toLocaleDateString('en-US')) ||
              new Date().toLocaleDateString('en-US')}
          </DatepickerContent>
        </DatepickerLabel>

        <DatePicker
          modal
          mode="date"
          open={open}
          date={date || new Date()}
          onConfirm={(newDate) => {
            setOpen(false);
            onConfirm(newDate);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          {...props}
        />
      </InputContainer>
      {errorMessage && (
        <Text mv={0} mh={8} color="red" align="left">
          {errorMessage}
        </Text>
      )}
    </InputWrapper>
  );
};
