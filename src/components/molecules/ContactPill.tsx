import { Divider, Group, MantineColor, Text, ThemeIcon } from '@mantine/core'
import React from 'react'
import { IconType } from 'react-icons'
import Anchor from '../atoms/Anchor'

interface ContactPillProps {
  Icon: IconType
  details: string
  iconColor?: MantineColor
  textColor?: MantineColor
  as?: 'phone' | 'email' | 'location' | 'birthday'
}
type ContactPillAnchorProps = {} & Omit<ContactPillProps, 'Icon'>

const I = ({ details }) => {
  return <Text size="md">{details}</Text>
}
const ContactType = ({ details, as }: ContactPillAnchorProps) => {
  switch (as) {
    case 'phone':
      return (
        <Anchor href={`tel:${details}`}>
          <I details={details} />
        </Anchor>
      )
    case 'email':
      return (
        <Anchor href={`mailto:${details}`}>
          <I details={details} />
        </Anchor>
      )
    case 'location':
      return (
        <Anchor
          href={`https://www.google.com/maps/search/?api=1&query=${details}`}
          target="_blank"
          rel="noreferrer"
        >
          <I details={details} />
        </Anchor>
      )
    case 'birthday':
      return (
        <Anchor>
          <I details={details} />
        </Anchor>
      )
    default:
      return <I details={details} />
  }
}
const ContactPill = ({
  Icon,
  details,
  as,
  iconColor,
  textColor
}: ContactPillProps) => {
  return (
    <Group
      sx={(theme) => ({
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: theme.colors.gray,
        color: textColor || theme.colors.dark[0],
        boxShadow: theme.shadows[3],
        fontSize: theme.fontSizes.md,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing.lg,
        textDecoration: 'none',
        marginTop: theme.spacing.sm,
        borderRadius: theme.radius.sm,
        a: {
          color: textColor || theme.colors.dark[0],
          textDecoration: 'none',
          textAlign: 'center',
          fontSize: theme.fontSizes.lg,
          flex: '1',
          '&:hover': {
            textDecoration: 'none',
            color: theme.colors.dark[1]
          }
        },
        '&:hover': {
          transform: 'scale(1.009)',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          cursor: 'pointer'
        }
      })}
    >
      <Group>
        <ThemeIcon color={iconColor} variant="light" size="xl">
          <Icon size={20} />
        </ThemeIcon>
        <Divider sx={{ height: 'auto' }} size="md" orientation="vertical" />
      </Group>
      <ContactType details={details} as={as} />
    </Group>
  )
}

export default ContactPill
