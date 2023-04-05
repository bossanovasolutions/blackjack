import { ActivityIndicator } from 'react-native';
import { Button, Alert, Logo, Icon } from '@components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext } from 'react';
import {
  ScreenContainer,
  ContentContainer,
  Title,
  Text,
  Bold,
  LinkContainer,
  Link,
  IconContainer,
} from './styles';
import { RootStackParams } from '../../../types/router';
import { InfoContainer } from '../LoginWithEmail/styles';
import { AuthContext } from '../../../contexts/AuthContext';

type Props = NativeStackScreenProps<RootStackParams, 'EmailVerification'>;

const EmailVerificationScreen = ({ route }: Props) => {
  const { email } = route.params;
  const { useEmailLinkEffect, sendSignInLinkToEmail } = useContext(AuthContext);
  const { error, verified } = useEmailLinkEffect(email);

  const sendLinkAgain = () => {
    try {
      return sendSignInLinkToEmail(email);
    } catch (e: any) {
      return Alert('Error', e?.message?.split(']')[1]);
    }
  };

  if (error) {
    return (
      <ScreenContainer>
        <ContentContainer>
          <Logo mb={56} />
          <Title>An Error Occured</Title>
          <IconContainer>
            <Icon name="Email" size={100} color="red" />
          </IconContainer>
          <Text>{error}</Text>
          <LinkContainer>
            <Link size={9} onPress={sendLinkAgain}>
              Send New Email
            </Link>
          </LinkContainer>
        </ContentContainer>
      </ScreenContainer>
    );
  }

  if (verified) {
    return (
      <ScreenContainer>
        <ContentContainer>
          <Logo mb={56} />
          <Title>Email verified</Title>
          <IconContainer>
            <Icon name="Checklist" size={80} color="primary" />
          </IconContainer>
        </ContentContainer>
        <Button label="Continue" full />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <Logo mb={56} />
        <Title>Please verify your email</Title>
        <InfoContainer>
          <Text>
            We've sent a email verification for <Bold>{email} </Bold>
          </Text>
          <Text>
            Check your email and click on the link to verify your email
          </Text>
        </InfoContainer>

        <InfoContainer>
          <Text size={9}>
            If you haven't received it, we can send you another one.
          </Text>
        </InfoContainer>

        <LinkContainer>
          <Link size={9} onPress={sendLinkAgain}>
            Send New Email
          </Link>
        </LinkContainer>
      </ContentContainer>
      <ActivityIndicator />
    </ScreenContainer>
  );
};

export { EmailVerificationScreen };
