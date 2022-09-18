import { Group, Stack, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { GetStaticProps } from 'next'
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineGlobal } from 'react-icons/ai'
import MainLink from '../components/molecules/MainLink'
import Profile from '../components/molecules/Profile'
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
        <Stack>
          {/*  <div>
              <Title align="center" order={2}>
                {user.name}
              </Title>
              <Text color="dimmed"> {user.worktitle}</Text>
            </div>
            <Paper withBorder p="sm">
              <Text color="gray" size="md" pb="sm">
                {user.about}
              </Text>
            </Paper> */}
          <Profile
            avatar={user.imgUrl}
            name={user.name}
            job={user.worktitle}
            email="adebayo.ajayi@viabay.se"
          >
            <Group position="center" p="md">
              <MainLink
                icon={<AiFillGithub />}
                label="Github"
                external
                link={user.github}
              />
              <MainLink
                icon={<AiFillLinkedin />}
                label="Linkedin"
                external
                link={user.linkedin}
              />
              <MainLink
                icon={<AiOutlineGlobal />}
                label="Viabay"
                external
                link="https://viabay.se"
              />
            </Group>
          </Profile>
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
