import { ActivityIndicator } from 'react-native';
import { Icons } from '@types';
import { Icon } from '../Icon/Icon';
import {
  ButtonContainer,
  IconContainer,
  ButtonText,
  ButtonVariants,
} from './styles';

type ButtonProps = {
  label: string;
  onPress?: () => any;
  mv?: number;
  mh?: number;
  icon?: Icons;
  variant?: ButtonVariants;
  full?: boolean;
  disabled?: boolean;
  loading?: boolean;
  iconSize?: number;
};

const noop = () => {};

const Button = ({
  label,
  onPress,
  mv,
  mh,
  icon,
  iconSize,
  variant = 'default',
  full = false,
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) => (
  <ButtonContainer
    onPress={disabled ? noop : onPress}
    mv={mv}
    mh={mh}
    variant={variant}
    full={full}
    disabled={disabled}
    {...props}
  >
    {loading && (
      <IconContainer>
        <ActivityIndicator />
      </IconContainer>
    )}
    {icon ? (
      <IconContainer>
        <Icon
          name={icon}
          size={iconSize}
          color={variant !== 'outlineDefault' ? 'white' : 'black'}
        />
      </IconContainer>
    ) : null}
    <ButtonText variant={variant}>{label}</ButtonText>
  </ButtonContainer>
);

export { Button };
