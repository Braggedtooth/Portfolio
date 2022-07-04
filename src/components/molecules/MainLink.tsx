import {
  UnstyledButton,
  Group,
  ThemeIcon,
  Text,
  MantineColor
} from '@mantine/core'
import Link from 'next/link'
import React from 'react'

interface MainLinkProps {
  icon: React.ReactNode
  link: string
  color: MantineColor
  label: string
  target?: string
  close: () => void
}

const MainLink = ({
  icon,
  color,
  label,
  link,
  close,
  target
}: MainLinkProps) => {
  return (
    <Link passHref href={link}>
      <UnstyledButton
        component="a"
        href={link}
        target={target}
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0]
          }
        })}
        onClick={close}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="md">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  )
}

export default MainLink
