import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { RootStackParams } from '@types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeScreen } from './Welcome';
import { theme } from '../../../styles/theme';

describe('WelcomeScreen', () => {
  const mockNavigation: NativeStackScreenProps<RootStackParams, 'Welcome'> = {
    navigate: jest.fn(),
    route: {
      key: 'Welcome',
      name: 'Welcome',
      params: undefined,
    },
  };

  it('renders correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <WelcomeScreen navigation={mockNavigation} />
      </ThemeProvider>
    );
    expect(getByText('Welcome!')).toBeDefined();
    expect(getByText('Subtitle')).toBeDefined();
    expect(getByText('Login or register a new account')).toBeDefined();
    expect(getByText('Get Started')).toBeDefined();
  });

  it('navigates to Login screen when Get Started button is pressed', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <WelcomeScreen navigation={mockNavigation} />
      </ThemeProvider>
    );
    const getStartedButton = getByText('Get Started');
    fireEvent.press(getStartedButton);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
  });
});
