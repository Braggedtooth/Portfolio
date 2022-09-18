import { Avatar, Paper, Text } from '@mantine/core'
import React from 'react'

interface UserInfoActionProps {
  avatar: string
  name: string
  email: string
  job: string
  children: React.ReactNode
}

export default function Profile({
  avatar,
  name,
  email,
  job = 'Fullstack Developer',
  children
}: UserInfoActionProps) {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
      })}
    >
      <Avatar src={avatar} size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md">
        {name}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {email} • {job}
      </Text>

      {children}
    </Paper>
  )
}
