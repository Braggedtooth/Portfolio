import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import Theme from '../../types/theme'

export interface StyledProps {
  style?: React.CSSProperties
  theme: Theme
}

const StyledButton = styled.button((props: StyledProps) => ({
  color:
    props.theme.colorScheme === 'dark'
      ? props.theme.colors.primary
      : props.theme.colors.secondary,
  fontSize: props.theme.font.size.md,
  padding: '0.5rem 2rem',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: lighten(0.2, props.theme.colors.black),
    transition: 'ease background-color 250ms'
  }
}))

export default StyledButton
