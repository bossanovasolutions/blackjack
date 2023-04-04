import { useContext, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParams } from '@types';
import { Button, Input, Alert, Container, Logo } from '@components';
import {
  ScreenContainer,
  InputContainer,
  InfoContainer,
  Title,
  SubTitle,
  Text,
  LinkContainer,
  Link,
  ContentContainer,
} from './styles';
import { AuthContext } from '../../../contexts/AuthContext';

type Props = NativeStackScreenProps<RootStackParams, 'LoginWithEmail'>;

const LoginWithEmailScreen = ({ navigation }: Props) => {
  const { sendSignInLinkToEmail } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const handleEmailLogin = async () => {
    if (!email) {
      return Alert('Error', 'Email are required');
    }

    try {
      await sendSignInLinkToEmail(email);

      return navigation.navigate('EmailVerification', { email });
    } catch (error) {
      return Alert('Error', error.message.split(']')[1]);
    }
  };

  return (
    <Container>
      <ScreenContainer>
        <ContentContainer>
          <Logo mb={56} />
          <SubTitle size="12" mv={6}>
            Welcome to carSHAiR
          </SubTitle>
          <Title size="22">Login or Signup</Title>
          <InputContainer>
            <Input
              icon="Email"
              placeholder="Enter your E-mail"
              value={email}
              onChangeText={(text) => setEmail(text)}
              iconSize={23}
            />
          </InputContainer>
          <InfoContainer>
            <Text size={9}>
              We'll send you a verification code to ensure this is your e-email.
              Standard message and data rates apply
            </Text>
          </InfoContainer>
          <LinkContainer>
            <Text>
              <Link size={9} bold>
                Terms & Conditions
              </Link>{' '}
              and{' '}
              <Link size={9} bold>
                Privacy Policy.
              </Link>
            </Text>
          </LinkContainer>
        </ContentContainer>
        <Button label="Continue" onPress={handleEmailLogin} full mv={8} />
      </ScreenContainer>
    </Container>
  );
};

export { LoginWithEmailScreen };
