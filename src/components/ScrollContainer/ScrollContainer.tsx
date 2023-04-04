import { ReactNode } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  children: ReactNode;
  extraHeight?: number;
};

const ScrollContainer = ({ children, extraHeight = 150 }: Props) => (
  <KeyboardAwareScrollView
    extraHeight={extraHeight}
    contentContainerStyle={{ flex: 1 }}
    indicatorStyle="black"
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  </KeyboardAwareScrollView>
);

export { ScrollContainer };
