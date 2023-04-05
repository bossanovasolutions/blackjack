import { Text } from '../Text/Text';

type LogoProps = {
  mb?: number;
  mt?: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Logo = ({ ...props }: LogoProps) => (
  <Text bold>Logo</Text>
);

export { Logo };
