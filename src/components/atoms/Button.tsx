import React from 'react'
import StyledButton from '../_styled/StyledButton'

type sizeType = { h: number | string; w: number | string }
export interface StyledProps {
  color?: string
  size: sizeType
  borderRadius?: number
  border?: string
  bg?: string
  p?: number
  m?: number
  pt?: number
  pb?: number
  pl?: number
  pr?: number
  mt?: number
  mb?: number
  ml?: number
  mr?: number
}
interface ButtonProps extends StyledProps {
  label?: string
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
    p,
    m,
    pt,
    pb,
    pl,
    pr,
    mt,
    mb,
    ml,
    mr,
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
      pb={pb}
      pl={pl}
      pt={pt}
      pr={pr}
      mb={mb}
      ml={ml}
      mt={mt}
      mr={mr}
    >
      {children || label}
    </StyledButton>
  )
}
export default Button
