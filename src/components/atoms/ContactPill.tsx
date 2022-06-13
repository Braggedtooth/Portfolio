import React from 'react'
import { IconType } from 'react-icons'
import StyledContactPill from '../_styled/StyledContactPill'
import StledIconContainer from '../_styled/StyledIconContainer'

interface ContactPillProps {
  Icon: IconType
  details: string
}

const ContactPill = ({ Icon, details }: ContactPillProps) => {
  return (
    <StyledContactPill>
      <StledIconContainer>
        <Icon size={20} style={{ padding: '0.5rem' }} />
      </StledIconContainer>
      <p>{details}</p>
    </StyledContactPill>
  )
}

export default ContactPill
