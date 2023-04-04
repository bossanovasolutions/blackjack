import { ReactNode } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { isIos } from '@helpers';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => (
  <KeyboardAvoidingView behavior={isIos ? 'padding' : null}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export { Container };
