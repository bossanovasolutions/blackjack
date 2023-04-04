import { useState, useContext, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParams } from '@types';
import analytics from '@react-native-firebase/analytics';
import { Button, Container, InputCode, Logo } from '@components';
import { AuthContext } from '@contexts';
import {
  Text,
  Link,
  ScreenContainer,
  InputContainer,
  SubtitleContainer,
  ContentContainer,
  Title,
  Bold,
  ButtonContainer,
  ErrorContainer,
  Error,
} from './styles';

type Props = NativeStackScreenProps<RootStackParams, 'PhoneVerification'>;

const PhoneVerificationScreen = ({ route }: Props) => {
  const { phoneLogin } = useContext(AuthContext);
  const { phone } = route.params;
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(route.params.confirmation);
  const [errorMessage, setErrorMessage] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!counter) return;

    const intervalId = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);

    // eslint-disable-next-line consistent-return
    return () => clearInterval(intervalId);
  }, [counter]);

  const sendCode = async () => {
    setCounter(30);
    setErrorMessage('');
    if (!phone) {
      setErrorMessage('Phone number are required');
    }

    const newConfirmation = await phoneLogin(phone);
    await analytics().logEvent('send_phone_code');
    return setConfirmation(newConfirmation);
  };

  const handleConfirmCode = async () => {
    setLoading(true);
    if (!code) {
      setLoading(false);
      setErrorMessage('Code are required');
    }

    try {
      await confirmation.confirm(code);
      setLoading(false);

      await analytics().logEvent('phone_validated');
      return await analytics().logEvent('login_sucessfull', {
        method: 'phone',
      });
    } catch (error: any) {
      setLoading(false);
      return setErrorMessage(error.message.split(']')[1]);
    }
  };

  return (
    <Container>
      <ScreenContainer>
        <ContentContainer>
          <Logo mb={56} />

          <Title>Input the 6-digit Verification Code</Title>

          <InputContainer>
            <InputCode value={code} onChange={setCode} length={6} />
          </InputContainer>

          {!errorMessage && (
            <SubtitleContainer>
              <Text>
                We've sent a 6 digit code to <Bold>{phone}.</Bold>
              </Text>
              <Text>
                If you haven't received it, we can send you another one.
              </Text>
            </SubtitleContainer>
          )}
          {errorMessage && (
            <ErrorContainer>
              <Error>Verification failed</Error>
              <Error>
                Check the new code sent to <Bold>{phone}.</Bold>
              </Error>
            </ErrorContainer>
          )}
          {counter > 0 ? (
            <Text>
              You can resend the code in <Bold>{counter} seconds.</Bold>
            </Text>
          ) : (
            <Link color="primary" onPress={sendCode} underlined>
              Resend Code
            </Link>
          )}
        </ContentContainer>

        <ButtonContainer>
          <Button
            label={loading ? 'Verifing' : 'Continue'}
            loading={loading}
            onPress={handleConfirmCode}
            full
          />
        </ButtonContainer>
      </ScreenContainer>
    </Container>
  );
};

export { PhoneVerificationScreen };
