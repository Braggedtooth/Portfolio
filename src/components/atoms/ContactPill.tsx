import React from 'react'
import { IconType } from 'react-icons'
import calculateAge from '../../utils/calculateAge'
import StyledContactPill from '../_styled/StyledContactPill'
import StledIconContainer from '../_styled/StyledIconContainer'

interface ContactPillProps {
  Icon: IconType
  details: string
  as: 'phone' | 'email' | 'location' | 'birthday'
}

const ContactType = (
  details: string,
  as: 'phone' | 'email' | 'location' | 'birthday'
  // eslint-disable-next-line consistent-return
) => {
  switch (as) {
    case 'phone':
      return (
        <a
          style={{
            textAlign: 'center',
            margin: '0.5rem',
            padding: '0.5rem',
            width: '70%',
            color: '#6b6b6b'
          }}
          href={`tel:${details}`}
        >
          {details}
        </a>
      )
    case 'email':
      return (
        <a
          style={{
            textAlign: 'center',
            margin: '0.5rem',
            padding: '0.5rem',
            width: '70%',
            color: '#6b6b6b'
          }}
          href={`mailto:${details}`}
        >
          {details}
        </a>
      )
    case 'location':
      return (
        <a
          style={{
            textAlign: 'center',
            margin: '0.5rem',
            padding: '0.5rem',
            width: '70%',
            color: '#6b6b6b'
          }}
          href={`https://www.google.com/maps/search/?api=1&query=${details}`}
          target="_blank"
          rel="noreferrer"
        >
          {details}
        </a>
      )
    case 'birthday':
      return (
        <p
          style={{
            textAlign: 'center',
            margin: '0.5rem',
            padding: '0.5rem',
            width: '70%',
            color: '#6b6b6b'
          }}
        >
          {`${calculateAge(new Date(details))} years old`}
        </p>
      )
    default:
  }
}
const ContactPill = ({ Icon, details, as }: ContactPillProps) => {
  return (
    <StyledContactPill>
      <StledIconContainer>
        <Icon size={20} style={{ padding: '0.5rem' }} />
      </StledIconContainer>

      {ContactType(details, as)}
    </StyledContactPill>
  )
}

export default ContactPill
