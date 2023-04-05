import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParams } from '@types';
import { Button, Container, Divider, Title, SubTitle, Text } from '@components';
import BackgroundImage from '../../../../assets/images/splash.png';
import { ButtonContainer, ScreenContainer, TextContainer } from './styles';

type Props = NativeStackScreenProps<RootStackParams, 'Welcome'>;

const WelcomeScreen = ({ navigation }: Props) => {
  const goToNextScreen = async () => {
    navigation.navigate('Login');
  };

  return (
    <Container>
      <ScreenContainer source={BackgroundImage}>
        <Title>Welcome!</Title>
        <SubTitle>Subtitle</SubTitle>

        <Divider mv={4} size={20} />

        <TextContainer>
          <Text>Login or register a new account</Text>
        </TextContainer>

        <ButtonContainer>
          <Button label="Get Started" onPress={goToNextScreen} full />
        </ButtonContainer>
      </ScreenContainer>
    </Container>
  );
};

export { WelcomeScreen };
