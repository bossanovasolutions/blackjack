import { TextInputProps, TouchableOpacity } from 'react-native';
import { Text } from '../Text/Text';
import { theme } from '../../styles/theme';
import {
  InputContainer,
  IconContainer,
  BaseInput,
  InputWrapper,
} from './styles';
import { Icon } from '../Icon/Icon';

type InputProps = TextInputProps & {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  mv?: number;
  mh?: number;
  icon?: string;
  iconRight?: string;
  label?: string;
  labelSize?: string;
  size?: number | string;
  round?: boolean;
  error?: boolean;
  errorMessage?: string;
  large?: boolean;
  numberOfLines?: number;
  counter?: string;
  iconSize?: number;
  mask?: any;
  onPressIcon?: () => void;
};

const Input = ({
  secureTextEntry = false,
  mv,
  mh,
  icon,
  iconRight,
  size,
  round,
  error,
  large,
  errorMessage,
  label,
  numberOfLines,
  counter,
  labelSize = '13',
  iconSize = 32,
  onPressIcon,
  onChangeText,
  mask,
  ...props
}: InputProps) => (
  <InputWrapper mv={mv} mh={mh}>
    {label && (
      <Text mv={8} color="black700" align="left" size={labelSize} bold>
        {label}
      </Text>
    )}
    <InputContainer
      size={size}
      round={round}
      error={error}
      large={large}
      numberOfLines={numberOfLines}
    >
      {icon ? (
        <IconContainer>
          <Icon name={icon} color={theme.colors.grey500} size={iconSize} />
        </IconContainer>
      ) : null}
      <BaseInput
        autoCapitalize={false}
        secureTextEntry={secureTextEntry}
        returnKeyType="done"
        placeholderTextColor={theme.colors.black300}
        bold={large}
        numberOfLines={numberOfLines}
        onChangeText={(_, unmasked) => {
          onChangeText(unmasked);
        }}
        mask={mask}
        {...props}
      />
      {iconRight ? (
        <TouchableOpacity onPress={onPressIcon}>
          <Icon name={iconRight} color={theme.colors.grey500} size={iconSize} />
        </TouchableOpacity>
      ) : null}
    </InputContainer>

    {counter && (
      <Text mv={4} mh={4} color="grey700" align="right">
        {counter} Caracteres left
      </Text>
    )}

    {errorMessage && (
      <Text mv={8} mh={8} color="red" align="left">
        {errorMessage}
      </Text>
    )}
  </InputWrapper>
);

export { Input };
