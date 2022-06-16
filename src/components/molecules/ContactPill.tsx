import React from 'react'
import { IconType } from 'react-icons'
import calculateAge from '../../utils/calculateAge'
import Anchor from '../atoms/Anchor'

interface ContactPillProps {
  Icon: IconType
  details: string
  as: 'phone' | 'email' | 'location' | 'birthday'
}

const ContactType = ({
  details,
  as,
  children
}: Omit<ContactPillProps, 'Icon'> & { children: React.ReactElement }) => {
  switch (as) {
    case 'phone':
      return <Anchor href={`tel:${details}`}>{children}</Anchor>
    case 'email':
      return <Anchor href={`mailto:${details}`}>{children}</Anchor>
    case 'location':
      return (
        <Anchor
          href={`https://www.google.com/maps/search/?api=1&query=${details}`}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </Anchor>
      )
    case 'birthday':
      return <Anchor href="/">{children}</Anchor>
    default:
      return null
  }
}
const ContactPill = ({ Icon, details, as }: ContactPillProps) => {
  return (
    <ContactType details={details} as={as}>
      <>
        <Icon size={20} style={{ padding: '0.5rem' }} />
        {as === 'birthday'
          ? `${calculateAge(new Date(details))} years old`
          : details}
      </>
    </ContactType>
  )
}

export default ContactPill
