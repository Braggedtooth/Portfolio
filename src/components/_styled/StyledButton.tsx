import React from 'react'
import styled from 'styled-components'
import { darken, lighten } from 'polished'

type sizeType = { h: number | string; w: number | string }
export interface StyledProps {
  color: string
  size: 'small' | 'large'
  borderRadius?: number
  border: string
  bg: string
  p: number | string
  m: number | string
  style?: React.CSSProperties
}

const getSize = (size: 'small' | 'large'): sizeType => {
  switch (size) {
    case 'small':
      return { h: '3rem', w: '3rem' }
    case 'large':
      return { h: '3rem', w: '100%' }
    default:
      return { h: '2rem', w: '12rem' }
  }
}

const StyledButton = styled.button((props: StyledProps) => ({
  color: props.color,
  height: getSize(props.size).h,
  width: getSize(props.size).w,
  background: props.bg,
  border: props.border || 'none',
  fontSize: '1.1rem',
  margin: props.m,
  padding: props.p,
  borderRadius: (props.size === 'small' && '100px') || props.borderRadius,
  '&:hover': {
    backgroundColor: lighten(0.1, props.bg),
    cursor: 'pointer',
    color: darken(0.2, props.color),
    transition: '0.2s'
  }
}))

export default StyledButton
