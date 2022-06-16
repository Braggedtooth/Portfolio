import React from 'react'
import StyledContactPill from '../_styled/StyledContactPill'

interface AnchorProps {
  href?: string
  children: React.ReactNode
  [x: string]: any
}
const Anchor = ({ href, children, ...rest }: AnchorProps) => {
  return (
    <StyledContactPill href={href} {...rest}>
      {children}
    </StyledContactPill>
  )
}

export default Anchor
