/* eslint-disable no-console */
import {
  AppShell,
  Burger,
  Text,
  MediaQuery,
  Navbar,
  Box,
  Loader,
  Center
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

      {isMouted && (
        <AppShell
          styles={(theme) => ({
            main: {
              background:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[4]
                  : theme.colors.gray[0]
            }
          })}
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          fixed
          navbar={
            <Navbar
              p="md"
              hiddenBreakpoint="sm"
              hidden={!opened}
              width={{ sm: 200, lg: 300 }}
            >
              <Navbar.Section grow mt="md">
                <MainLink
                  icon={<MdHome size={20} />}
                  color="teal"
                  label="Home"
                  link="/"
                  close={() => setOpened(false)}
                />
                <MainLink
                  icon={<MdFolder size={20} />}
                  color="indigo"
                  label="Projects"
                  link="/projects"
                  close={() => setOpened(false)}
                />
                <MainLink
                  icon={<MdContactPage size={20} />}
                  color="grape"
                  label="Contact"
                  link="/contact"
                  close={() => setOpened(false)}
                />
                <MainLink
                  icon={<MdDownload size={20} />}
                  color="orange"
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
                    justifyContent: 'center',
                    borderTop: `1px solid ${
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[4]
                        : theme.colors.gray[2]
                    }`
                  })}
                >
                  <Text size="sm" color="dimmed">
                    © 2022 bayo.se
                  </Text>
                </Box>
              </Navbar.Section>
            </Navbar>
          }
          header={
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
          }
        >
          <Center mb="xl">{routesLoading ? <Loader /> : children}</Center>
        </AppShell>
      )}
    </>
  )
}

export default Index
