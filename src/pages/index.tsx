import
  {
    Anchor,
    Badge,
    Center,
    Group,
    Paper, Stack,
    Text,
    Title,
    useMantineTheme
  } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail, MdPhone } from 'react-icons/md'
import ContactPill from '../components/molecules/ContactPill'
import getProjectData from '../data/project'
import getUserData from '../data/user'
import Layout from '../layout'
import IUser from '../types/user'
import { REVALIDATE_SECONDS } from '../utils/constants'

type userProps = {
  user: IUser
}

const Index = ({ user }: userProps) => {
  const theme = useMantineTheme()
  const media = useMediaQuery(`(min-width:${theme.breakpoints.md}px)`)
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return (

      <Stack align="center" sx={{ textAlign: 'center' }}>
        <Stack my={theme.spacing.lg} align="center">
          {/*  <ImageContainer> */}
          <Image
            src={user.imgUrl}
            height={150}
            width={150}
            alt="github profile image"
            style={{
              borderRadius: '50%'
            }}
          />

          <Stack sx={{ width: media ? '70%' : '100%' }}>
            <div>
              <Title align="center" order={2}>
                {user.name}
              </Title>
              <Text color="dimmed"> {user.worktitle}</Text>
            </div>
            <Paper withBorder p="sm">
              <Text color="gray" size="md" pb="sm">
                {user.about}
              </Text>
            </Paper>
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

            <Group position="center" align="center">
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
              {/*          <ContactPill
                iconColor="blue"
                Icon={MdPermContactCalendar}
                details={`${calculateAge(new Date(user.dob))} years old`}
                as="birthday"
              />
              <ContactPill
                iconColor="blue"
                Icon={MdLocationCity}
                details={user.city}
                as="location"
              /> */}
            </Group>
          </Stack>
        </Stack>
      </Stack>

  )
}

export default Index
Index.getLayout = (page: React.ReactElement) => (
  <Layout title="Home">{page}</Layout>
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
