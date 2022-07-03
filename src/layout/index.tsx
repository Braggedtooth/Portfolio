/* eslint-disable no-console */
import {
  AppShell,
  Burger,
  Text,
  MediaQuery,
  Navbar,
  useMantineTheme,
  Box,
  Loader,
  Center
} from '@mantine/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MdContactPage, MdDownload, MdFolder, MdHome } from 'react-icons/md'
import MainLink from '../components/molecules/MainLink'
import getUserData from '../data/user'

interface layoutProps {
  data: any
  title: string
  children?: React.ReactNode
}

const Index = ({ data, title, children }: layoutProps) => {
  const router = useRouter()
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  const [user, setUser] = React.useState(data.user)
  const [routesLoading, setRoutesLoading] = React.useState(false)

  // Fetch  data on mount if not passed from data prop
  useEffect(() => {
    if (!data.user) {
      getUserData().then((res) => {
        setUser(res)
      })
    }
  }, [data])

  useEffect(() => {
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
    user && (
      <>
        <Head>
          <title>{`Bayo.se - ${title}`}</title>
        </Head>

        <AppShell
          styles={{
            main: {
              background:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[4]
                  : theme.colors.gray[0]
            }
          }}
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
                  sx={{
                    paddingTop: theme.spacing.sm,
                    display: 'flex',
                    justifyContent: 'center',
                    borderTop: `1px solid ${
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[4]
                        : theme.colors.gray[2]
                    }`
                  }}
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
                color={theme.colors.gray[6]}
                mr="xl"
                aria-label="menu"
              />
            </MediaQuery>
          }
        >
          <Center mb="xl">{routesLoading ? <Loader /> : children}</Center>
        </AppShell>
      </>
    )
  )
}

export default Index
