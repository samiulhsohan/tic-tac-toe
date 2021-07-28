import React from 'react';
import Icon from './icon';
import { TIconProps } from './types';

const CrossIcon = (props: TIconProps) => {
  const { title = 'Cross', size, color = '#FFF', ...otherProps } = props;
  return (
    <Icon
      viewBox="0 0 24 24"
      size={size}
      title={title}
      color={color}
      {...otherProps}
    >
      <rect
        width="30.9617"
        height="2.58014"
        rx="1.29007"
        transform="matrix(0.71438 0.699758 -0.71438 0.699758 1.8432 0.528812)"
      />
      <rect
        width="30.9617"
        height="2.58014"
        rx="1.29007"
        transform="matrix(-0.71438 0.699758 -0.71438 -0.699758 24 1.80547)"
      />
    </Icon>
  );
};

export default CrossIcon;
