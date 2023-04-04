import { useContext, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParams } from '@types';
import { Divider, Text, Button, Input, CountrySelect, Logo } from '@components';
import { isIos } from '@helpers';
import { AuthContext } from '../../../contexts';
import {
  ScreenContainer,
  InputContainer,
  InfoContainer,
  LinkContainer,
  LinkPrimary,
  SubTitle,
  Title,
  Info,
} from './styles';

type Props = NativeStackScreenProps<RootStackParams, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const { googleLogin, appleLogin, phoneLogin } = useContext(AuthContext);
  const [appleLoading, setAppleLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('+1');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePhoneLogin = async () => {
    if (!phone) {
      return setErrorMessage('Phone number are required');
    }
    try {
      const confirmation = await phoneLogin(country + phone);

      return navigation.navigate('PhoneVerification', {
        confirmation,
        phone: country + phone,
      });
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-phone-number':
          return setErrorMessage('Invalid phone number');
        default:
          return setErrorMessage(error.message.split(']')[1]);
      }
    }
  };

  const handleGoogleLogin = async () => {
    setAppleLoading(false);
    setGoogleLoading(true);

    await googleLogin();

    setGoogleLoading(false);
  };

  const handleAppleLogin = async () => {
    setGoogleLoading(false);
    setAppleLoading(true);

    await appleLogin();

    setAppleLoading(false);
  };

  const handleEmailLogin = async () => {
    navigation.navigate('LoginWithEmail');
  };

  return (
    <ScreenContainer>
      <Logo mb={46} />

      <SubTitle mv={10}>Welcome</SubTitle>
      <Title>Login or Signup</Title>

      <InputContainer mt={36}>
        <CountrySelect onChange={setCountry} />
        <Input
          placeholder="Enter your Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={(text) => {
            setPhone(text);
            setErrorMessage('');
          }}
          error={!!errorMessage}
          large
        />
      </InputContainer>

      {errorMessage && (
        <Text size={12} color="red">
          {errorMessage}
        </Text>
      )}

      <InfoContainer>
        <Info>
          We'll call or text you to confirm your number. Standard message and
          data rates apply.
        </Info>
      </InfoContainer>

      <LinkContainer>
        <Text>
          <LinkPrimary size={12} bold>
            {' '}
            Terms & Conditions
          </LinkPrimary>{' '}
          and
          <LinkPrimary size={12} bold>
            {' '}
            Privacy Policy.
          </LinkPrimary>
        </Text>
      </LinkContainer>

      <Button label="Continue" onPress={handlePhoneLogin} full />
      <Divider text="or" mv={20} />

      <Button
        variant="outlineDefault"
        loading={googleLoading}
        label="Login with Google"
        icon="Google"
        iconSize={22}
        onPress={handleGoogleLogin}
        mv={8}
        full
      />

      {isIos && (
        <Button
          variant="outlineDefault"
          loading={appleLoading}
          label="Login with Apple"
          icon="Apple"
          iconSize={24}
          mv={8}
          onPress={handleAppleLogin}
          full
        />
      )}

      <Button
        variant="outlineDefault"
        label="Login with Email"
        icon="Email"
        iconSize={30}
        onPress={handleEmailLogin}
        mv={8}
        full
      />
    </ScreenContainer>
  );
};

export { LoginScreen };
