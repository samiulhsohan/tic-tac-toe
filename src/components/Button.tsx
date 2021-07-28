import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  return (
    <button className={'button button--' + variant} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
