import React from 'react'
import StyledButton, { StyledProps } from '../_styled/StyledButton'

interface ButtonProps extends Partial<StyledProps> {
  label: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps) => {
  const { onClick, label, style } = props

  return (
    <StyledButton onClick={onClick} style={style}>
      {label}
    </StyledButton>
  )
}
export default Button
