import React from 'react'
import StyledButton, { StyledProps } from '../_styled/StyledButton'

interface ButtonProps extends Partial<StyledProps> {
  label: string
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps) => {
  const {
    color = '#ff4',
    size,
    border = 'none',
    borderRadius = 25,
    onClick,
    label,
    bg = '#333',
    p = '0.5rem',
    m = '0.5rem',
    style,
    children
  } = props

  return (
    <StyledButton
      color={color}
      size={size}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
      m={m}
      bg={bg}
      p={p}
      style={style}
    >
      {children || label}
    </StyledButton>
  )
}
export default Button
