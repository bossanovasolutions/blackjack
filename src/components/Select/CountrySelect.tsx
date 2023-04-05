import { useState } from 'react';
import styled, { css, DefaultTheme } from 'styled-components/native';
import CountryPicker, { Flag } from 'react-native-country-picker-modal';
import { Text } from '../Text/Text';

const Container = styled.TouchableOpacity`
  ${({ theme }: { theme: DefaultTheme }) => css`
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.white};
    border-width: 0.5px;
    border-color: ${theme.colors.grey400};
    margin-right: 0px;
    min-height: ${theme.metrics.px(48)}px;
    max-height: ${theme.metrics.px(48)}px;
    padding-left: ${theme.metrics.px(4)}px;
    padding-right: ${theme.metrics.px(8)}px;
    border-right-color: transparent;
  `}
`;

const CountrySelect = ({ onChange }: { onChange: (text: string) => void }) => {
  const [countryCode, setCountryCode] = useState({
    callingCode: '1',
    cca2: 'US',
  });
  const [countryModalOpen, setCountryModalOpen] = useState(false);

  const handleCountrySelect = (country) => {
    setCountryCode(country);
    setCountryModalOpen(false);
    onChange(`+${country.callingCode}`);
  };

  return (
    <>
      <Container onPress={() => setCountryModalOpen(true)}>
        <Flag countryCode={countryCode.cca2 as any} flagSize={24} />
        <Text size="14" bold>
          +{countryCode.callingCode}
        </Text>
      </Container>
      <CountryPicker
        visible={countryModalOpen}
        withAlphaFilter
        withFilter
        // @ts-ignore
        placeholder=""
        withCallingCode
        onSelect={handleCountrySelect}
        onClose={() => setCountryModalOpen(false)}
      />
    </>
  );
};

export { CountrySelect };
