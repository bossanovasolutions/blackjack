import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import {
  IconContainer,
  OptionsContainer,
  SelectListContainer,
  Option,
  OptionSelected,
  CurrentContainer,
} from './styles';

type SelectProps = {
  options: {
    [key: string]: {
      value: JSX.Element;
    };
  };
  initialValue: string;
};

export const SelectDropdown = ({ options, initialValue }: SelectProps) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(initialValue);

  const openClose = (key: string) => {
    setVisible(!visible);
    setValue(key);
  };

  return (
    <>
      <SelectListContainer onPress={() => setVisible(!visible)}>
        <CurrentContainer>{options[value]?.value}</CurrentContainer>
        <IconContainer>
          <Icon name={visible ? 'Up' : 'Down'} size={15} />
        </IconContainer>
      </SelectListContainer>
      {visible && (
        <OptionsContainer>
          <OptionSelected onPress={() => setVisible(false)}>
            <CurrentContainer>{options[value]?.value}</CurrentContainer>
          </OptionSelected>
          {Object.keys(options)
            .filter((key) => key !== value)
            .map((key) => (
              <Option onPress={() => openClose(key)}>
                <CurrentContainer>{options[key]?.value}</CurrentContainer>
              </Option>
            ))}
        </OptionsContainer>
      )}
    </>
  );
};
