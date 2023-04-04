import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParams } from '@types';
import { BottomNavbar, Text, Title } from '@components';
import { ContentContainer, ScreenContainer } from './styles';

type Props = NativeStackScreenProps<RootStackParams, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <ScreenContainer>
      <ContentContainer>
        <Title mv={42}>Home</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis autem
          quis nulla consequuntur fugiat nemo similique qui, saepe accusantium
          dolores, magnam quam, consequatur harum corrupti iste vitae ex aut
          quas.
        </Text>
      </ContentContainer>

      <BottomNavbar active="search" />
    </ScreenContainer>
  );
};

export { HomeScreen };
