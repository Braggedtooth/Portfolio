import { Avatar, Group, Paper, Text } from '@mantine/core'
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineGlobal } from 'react-icons/ai'
import MainLink from './MainLink'

interface UserInfoActionProps {
  avatar: string
  name: string
  email: string
  job: string
  children: React.ReactNode
}
const profile = {
  name: 'Adebayo Ajayi',
  title: 'Software Engineer',
  city: 'Stockholm,Sweden',
  github: 'https://github.com/Braggedtooth',
  website: 'https://viabay.se',
  linkedin: 'https://www.linkedin.com/in/adebayoajayi/',
  email: 'adebayo.ajayi@viabay.se',
  imgUrl: 'https://avatars.githubusercontent.com/u/54339202?v=4'
}

export default function Profile() {
  return (
    <Paper
      radius="md"
      p="lg"
      mt="lg"
      sx={{
        backgroundColor: 'transparent'
      }}
    >
      <Avatar src={profile.imgUrl} size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md">
        {profile.name}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {profile.email} • {profile.title}
      </Text>
      <Group position="center" p="md">
          <MainLink
            icon={<AiFillGithub />}
            label="Github"
            external
            link={profile.github}
          />
          <MainLink
            icon={<AiFillLinkedin />}
            label="Linkedin"
            external
            link={profile.linkedin}
          />
          <MainLink
            icon={<AiOutlineGlobal />}
            label="Viabay"
            external
            link={profile.website}
          />
        </Group>
    </Paper>
  )
}
