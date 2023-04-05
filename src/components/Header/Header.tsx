import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParams } from '@types';
import { ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import { HeaderContainer, BackButton } from './styles';
import { Logo } from '../Logo/Logo';


type Props = {
  navBack?: () => void;
  mt?: number;
  mb?: number;
  ph?: number;
  w?: string;
  noLogo?: boolean;
  light?: boolean;
  absolute?: boolean;
  children?: ReactNode;
};

export const Header = ({
  navBack,
  mt,
  mb,
  ph,
  w,
  noLogo = false,
  light = false,
  absolute = false,
  children = false,
}: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const clickBack = () => {
    if (navBack) {
      navBack();
    } else {
      navigation.goBack();
    }
  };

  return (
    <HeaderContainer mb={mb} mt={mt} ph={ph} w={w} align={children} absolute={absolute}>
      <BackButton onPress={clickBack} light={light}>
        <Icon name="BackSquare" size={66} color={light ? 'white' : 'black'} />
      </BackButton>
      {!noLogo && (
        <Logo />
      )}
      {children}
    </HeaderContainer>
  );
};
