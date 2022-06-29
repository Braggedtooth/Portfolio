import { Divider, Group, MantineColor, Text, ThemeIcon } from '@mantine/core'

import { darken } from 'polished'
import React from 'react'
import { IconType } from 'react-icons'
import calculateAge from '../../utils/calculateAge'
import Anchor from '../atoms/Anchor'

interface ContactPillProps {
  Icon: IconType
  details: string
  iconColor?: MantineColor
  textColor?: MantineColor
  as?: 'phone' | 'email' | 'location' | 'birthday'
}
type ContactPillAnchorProps = {} & Omit<ContactPillProps, 'Icon'>
const I = ({ details, as }) => {
  return (
    <Text size="md">
      {as === 'birthday'
        ? `${calculateAge(new Date(details))} years old`
        : details}
    </Text>
  )
}
const ContactType = ({ details, as }: ContactPillAnchorProps) => {
  switch (as) {
    case 'phone':
      return (
        <Anchor href={`tel:${details}`}>
          <I details={details} as={as} />
        </Anchor>
      )
    case 'email':
      return (
        <Anchor href={`mailto:${details}`}>
          <I details={details} as={as} />
        </Anchor>
      )
    case 'location':
      return (
        <Anchor
          href={`https://www.google.com/maps/search/?api=1&query=${details}`}
          target="_blank"
          rel="noreferrer"
        >
          <I details={details} as={as} />
        </Anchor>
      )
    case 'birthday':
      return (
        <Anchor>
          <I details={details} as={as} />
        </Anchor>
      )
    default:
      return <I details={details} as={as} />
  }
}
const ContactPill = ({
  Icon,
  details,
  as,
  iconColor,
  textColor
}: ContactPillProps) => {
  /*   const Mytheme = useMantineTheme() */
  /*   const media = useMediaQuery(`(min-width:${Mytheme.breakpoints.md}px)`) */

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
        textAlign: 'start',
        alignItems: 'center',
        padding: theme.spacing.sm,
        textDecoration: 'none',
        marginTop: theme.spacing.sm,
        borderRadius: theme.radius.sm,
        a: {
          color: textColor || theme.colors.dark[0],
          textDecoration: 'none',
          flex: '1',
          '&:hover': {
            textDecoration: 'none',
            color: darken(0.1, textColor || theme.colors.dark[0])
          }
        },
        '&:hover': {
          transform: 'scale(1.009)',
          cursor: 'pointer'
        }
      })}
    >
      <Group>
        <ThemeIcon color={iconColor} variant="light">
          <Icon size={20} />
        </ThemeIcon>
        <Divider sx={{ height: 'auto' }} size="md" orientation="vertical" />
      </Group>
      <ContactType details={details} as={as} />
    </Group>
  )
}

export default ContactPill
