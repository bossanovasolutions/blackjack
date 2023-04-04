import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { Icons, RootStackParams } from '@types';
import { Icon } from '../Icon/Icon';
import { Container, IconContainer, Text } from './styles';

type NavbarProps = {
  active: 'search' | 'favorites' | 'trips' | 'chat' | 'profile';
};

const BottomNavbar = ({ active }: NavbarProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const buttons = [
    {
      name: 'search',
      icon: 'SearchNav',
      label: 'Search',
      screen: 'Home'
    },
    {
      name: 'favorites',
      icon: 'Heart',
      label: 'Favorites',
      screen: 'Home'
    },
    {
      name: 'trips',
      icon: 'TripsNav',
      label: 'Trips',
      screen: 'Home'
    },
    { name: 'chat', icon: 'ChatNav', label: 'Chat', screen: 'Home', size: 38 },
    {
      name: 'profile',
      icon: 'ProfileNav',
      label: 'Profile',
      screen: 'ProfileView'
    },
  ];

  // @TODO: Added the `as never` because I couldn't fix the Typescript error "No overload matches this call."
  const goToScreen = (screen: string): void =>
    navigation.navigate(screen as never);

  return (
    <Container>
      {buttons.map((button) => (
        <IconContainer
          key={button.name}
          onPress={() => goToScreen(button.screen)}
        >
          <Icon
            name={button.icon as Icons}
            size={24}
            color={active === button.name ? 'primary' : 'grey400'}
          />
          <Text active={active === button.name}>{button.name}</Text>
        </IconContainer>
      ))}
    </Container>
  );
};

export { BottomNavbar };
