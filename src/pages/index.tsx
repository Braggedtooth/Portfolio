import React from 'react'
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
  Divider,
  Container
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
import ImageContainer from '../components/atoms/ImageContainer'
import calculateAge from '../utils/calculateAge'

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
    isMounted && (
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
              padding: theme.spacing.md
            }}
          >
            <Group
              position={!media ? 'apart' : 'center'}
              my={theme.spacing.lg}
              sx={{ flexDirection: !media ? 'column' : 'row-reverse' }}
            >
              <Stack
                sx={{
                  minWidth: '200px',
                  width: media ? '20%' : '100%'
                }}
                align="center"
                justify="center"
              >
                <ImageContainer>
                  <Image
                    src={user.imgUrl}
                    height={200}
                    width={200}
                    alt="github profile image"
                    style={{
                      borderRadius: '25px'
                    }}
                  />
                </ImageContainer>
                <TitleTag title={user.worktitle} />
              </Stack>

              <Stack sx={{ width: media ? '70%' : '100%' }}>
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
            <Divider my="sm" />
            <Container p="md">
              <Stack>
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
                  details={`${calculateAge(new Date(user.dob))} years old`}
                  as="birthday"
                />
                <ContactPill
                  iconColor="blue"
                  Icon={MdLocationCity}
                  details={user.city}
                  as="location"
                />
              </Stack>
            </Container>
          </Paper>
        </Stack>
      </Center>
    )
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
