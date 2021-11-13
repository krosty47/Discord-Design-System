import { InputHTMLAttributes } from 'react';

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}
