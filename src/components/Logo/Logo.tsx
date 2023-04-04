import { Text } from '../Text/Text';

type LogoProps = {
  mb?: number;
  mt?: number;
};

const Logo = ({ ...props }: LogoProps) => (
  <Text bold>Logo</Text>
);

export { Logo };
