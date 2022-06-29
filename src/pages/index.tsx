import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import {
  Center,
  Title,
  Text,
  useMantineTheme,
  Paper,
  Group,
  Stack,
  Badge,
  Anchor,
  Divider
} from '@mantine/core'
import {
  MdPhone,
  MdEmail,
  MdLocationCity,
  MdPermContactCalendar
} from 'react-icons/md'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import { useMediaQuery } from '@mantine/hooks'
import { REVALIDATE_SECONDS } from '../utils/constants'
import getUserData from '../data/user'
import IUser from '../types/user'
import Layout from '../layout'
import getProjectData from '../data/project'
import ContactPill from '../components/molecules/ContactPill'
import TitleTag from '../components/atoms/TitleTag'

type userProps = {
  user: IUser
}

const Index = ({ user }: userProps) => {
  const theme = useMantineTheme()
  const media = useMediaQuery(`(min-width:${theme.breakpoints.md}px)`)
  return (
    <Center
      sx={() => ({
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

        width: media ? '80%' : '100%',
        height: '100%'
      })}
    >
      <Stack align="center" sx={{ textAlign: 'center' }}>
        <Paper
          shadow="md"
          sx={{
            padding: theme.spacing.xl
          }}
        >
          <Group position={media ? 'apart' : 'center'} mb={theme.spacing.lg}>
            <Stack sx={{ width: media ? '20%' : '100%' }}>
              <Stack align="center" justify="center">
                <Image
                  src={user.imgUrl}
                  height={200}
                  width={200}
                  alt="github profile image"
                  style={{
                    borderRadius: '50%',
                    padding: theme.spacing.md
                  }}
                />
                <TitleTag title={user.worktitle} />
              </Stack>
            </Stack>
            <Stack sx={{ width: media ? '60%' : '100%' }}>
              <Title align="center" order={2} pb="sm">
                {user.name}
              </Title>
              <Text color="gray" size="md" pb="sm">
                {user.about}
              </Text>
              <Group position="center">
                <Badge
                  sx={{ paddingLeft: 0 }}
                  size="lg"
                  radius="xl"
                  leftSection={
                    <Center px="sm">
                      <AiFillLinkedin size={20} />
                    </Center>
                  }
                >
                  <Anchor href={user.linkedin}>Linkedin</Anchor>
                </Badge>
                <Badge
                  sx={{ paddingLeft: 0 }}
                  size="lg"
                  radius="xl"
                  color="gray"
                  variant="outline"
                  leftSection={
                    <Center px="sm">
                      <AiFillGithub size={20} />{' '}
                    </Center>
                  }
                >
                  <Anchor href={user.github}>Github</Anchor>
                </Badge>
              </Group>
            </Stack>
          </Group>
          <Divider my="sm" label="About me" labelPosition="center" />
          <Stack align="center">
            <ContactPill
              iconColor="green"
              Icon={MdPhone}
              details={`+${user.contact.telephone.toString()}`}
              as="phone"
            />
            <ContactPill
              iconColor="red"
              Icon={MdEmail}
              details={user.contact.email}
              as="email"
            />
            <ContactPill
              iconColor="blue"
              Icon={MdPermContactCalendar}
              details={user.dob}
              as="birthday"
            />
            <ContactPill
              iconColor="blue"
              Icon={MdLocationCity}
              details={user.city}
              as="location"
            />
          </Stack>
        </Paper>
      </Stack>
    </Center>
  )
}

export default Index
Index.getLayout = (page: ReactElement, user: IUser) => (
  <Layout data={user}>{page}</Layout>
)
export const getStaticProps: GetStaticProps = async () => {
  const user = await getUserData()
  const projects = await getProjectData()
  return {
    props: {
      user,
      projects
    },
    revalidate: REVALIDATE_SECONDS
  }
}
