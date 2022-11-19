import { ReactNode } from 'react';
import { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode,
}
