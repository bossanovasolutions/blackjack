import { Icons } from '@types';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { RadioGroupContainer, RadioButtonContainer } from './styles';

type Options = {
  label: string;
  icon: Icons;
};

type RadioGroupProps = {
  options: Array<Options>;
  activeButton: string;
  onChange: Function;
  mv?: number;
};

type RadioButtonProps = {
  label: string;
  onChange?: Function;
  activeButton: string;
  icon: Icons;
};

const RadioButton = ({
  onChange,
  activeButton,
  label,
  icon,
}: RadioButtonProps) => {
  const active = activeButton === label;
  return (
    <RadioButtonContainer active={active} onPress={() => onChange(label)}>
      <Icon name={icon} color={active ? 'white' : 'primary'} size={22} />
      <Text color={active ? 'white' : 'primary'} mv={12} bold>
        {label}
      </Text>
    </RadioButtonContainer>
  );
};

const RadioGroup = ({ options, mv, ...props }: RadioGroupProps) => (
  <RadioGroupContainer mv={mv}>
    {options.map(({ label, icon }) => (
      <RadioButton
        key={`radio-group-option-${label}`}
        label={label}
        icon={icon}
        {...props}
      />
    ))}
  </RadioGroupContainer>
);

export { RadioGroup };
