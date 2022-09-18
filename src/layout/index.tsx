/* eslint-disable no-console */
import {
  Box,
  Burger,
  Center,
  Container,
  MediaQuery,
  Navbar,
  Paper,
  ScrollArea,
  Text
} from '@mantine/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { MdContactPage, MdDownload, MdFolder, MdHome } from 'react-icons/md'
import MainLink from '../components/molecules/MainLink'

interface layoutProps {
  title: string
  children?: React.ReactNode
}

const Index = ({ title, children }: layoutProps) => {
  const router = useRouter()
  const [opened, setOpened] = React.useState(false)
  const [isMouted, setisMouted] = React.useState(false)
  const [routesLoading, setRoutesLoading] = React.useState(false)

  React.useEffect(() => {
    setisMouted(true)
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`)
      setRoutesLoading(true)
    }
    const handleStop = () => {
      setRoutesLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
      <Head>
        <title>{`Bayo.se - ${title}`}</title>
      </Head>
      <Center
        sx={{
          display: 'flex',
          height: '100vh'
        }}
      >
        <Container
          size="lg"
          sx={() => ({
            display: 'flex',
            height: '80vh',
            width: '100%'
          })}
        >
          <Paper withBorder>
            <Navbar
              p="md"
              hiddenBreakpoint="sm"
              hidden={!opened}
              height="100%"
              width={{ sm: 200, lg: 300 }}
            >
              <Navbar.Section grow mt="md">
                <MainLink
                  icon={<MdHome />}
                  label="Home"
                  link="/"
                  close={() => setOpened(false)}
                />
                <MainLink
                  icon={<MdFolder />}
                  label="Projects"
                  link="/projects"
                  close={() => setOpened(false)}
                />
                <MainLink
                  icon={<MdContactPage />}
                  label="Contact"
                  link="/contact"
                  close={() => setOpened(false)}
                />
                <MainLink
                  icon={<MdDownload />}
                  label="Resume"
                  link="/resume"
                  close={() => setOpened(false)}
                />
              </Navbar.Section>
              <Navbar.Section>
                <Box
                  sx={(theme) => ({
                    paddingTop: theme.spacing.sm,
                    display: 'flex',
                    justifyContent: 'center'
                  })}
                >
                  <Text size="sm" color="dimmed">
                    © 2022 bayo.se
                  </Text>
                </Box>
              </Navbar.Section>
            </Navbar>
          </Paper>

          <Paper withBorder sx={{ width: '100%', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="md"
                color="gray"
                p="lg"
                aria-label="menu"
              />
            </MediaQuery>
            <ScrollArea
              offsetScrollbars
              style={{ height: '100%', width: '100%', margin: '0 auto' }}
            >
              {children}
            </ScrollArea>
          </Paper>
        </Container>
      </Center>
    </>
  )
}

export default Index
