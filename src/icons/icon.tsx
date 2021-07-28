import React from 'react';
import { TIconProps } from './types';

const Icon = (props: TIconProps & React.SVGProps<SVGSVGElement>) => {
  const { children, title, size = '24px', color, ...otherProps } = props;

  return (
    <svg fill={color} height={size} width={size} {...otherProps}>
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
};

export default Icon;
