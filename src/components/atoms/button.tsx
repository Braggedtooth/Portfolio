import styled from 'styled-components'
import React from 'react'
import { darken, lighten } from 'polished'

type sizeType = { h: number; w: number }
export interface StyledProps {
  color: string
  size: number | sizeType
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

const StyledButton = styled.button((props: StyledProps) => ({
  color: props.color,
  height: typeof props.size === 'number' ? props.size : props.size.h,
  width: typeof props.size === 'number' ? props.size : props.size.w,
  background: props.bg,
  border: 'none',
  fontSize: '1.2rem',
  margin: props.m,
  padding: props.p,
  marginTop: props.mt,
  marginLeft: props.ml,
  marginRight: props.mr,
  marginBottom: props.mb,
  paddingTop: props.pt,
  paddingBottom: props.pb,
  paddingLeft: props.pl,
  paddingRight: props.pr,
  borderRadius: '25px',
  '&:hover': {
    backgroundColor: lighten(0.1, props.bg),
    color: darken(0.1, props.color),
    transition: '0.2s'
  }
}))

const Button = (props: ButtonProps) => {
  const {
    color,
    size,
    onClick,
    label,
    bg,
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
