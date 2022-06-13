import styled from 'styled-components'
import { darken, lighten } from 'polished'

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

const StyledButton = styled.button((props: StyledProps) => ({
  color: props.color,
  height: props.size?.h,
  width: props.size?.w,
  background: props.bg,
  border: props.border || 'none',
  fontSize: '1.1rem',
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
  borderRadius: props.borderRadius || 25,
  '&:hover': {
    backgroundColor: lighten(0.1, props.bg),
    cursor: 'pointer',
    color: darken(0.5, props.color),
    transition: '0.2s'
  }
}))

export default StyledButton
