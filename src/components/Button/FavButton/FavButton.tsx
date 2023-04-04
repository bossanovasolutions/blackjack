import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icons } from '@types';
import { Icon } from '../../Icon/Icon';

type FavButtonProps = {
  status: boolean;
  size: number;
  color: 'white' | 'primary';
};

const FavButton = ({
  status,
  size = 36,
  color = 'primary',
  ...props
}: FavButtonProps) => {
  const [active, setActive] = useState(status);
  const iconProps = {
    name: active ? 'HeartSolid' : ('Heart' as Icons),
  };

  return (
    <TouchableOpacity
      onPress={() => {
        setActive(!active);
      }}
      {...props}
    >
      <Icon {...iconProps} size={size} color={color} />
    </TouchableOpacity>
  );
};

export { FavButton };
