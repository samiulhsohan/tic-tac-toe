import React from 'react';
import Icon from './icon';
import { TIconProps } from './types';

const CircleIcon = (props: TIconProps) => {
  const { title = 'Circle', size, color = '#FFF', ...otherProps } = props;
  return (
    <Icon
      viewBox="0 0 24 24"
      size={size}
      title={title}
      color={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
      />
    </Icon>
  );
};

export default CircleIcon;
