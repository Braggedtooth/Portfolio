/* eslint-disable no-console */
import {
  Box,
  Burger,
  Container,
  MediaQuery,
  Navbar,
  Paper,
  Text
} from '@mantine/core'
import Head from 'next/head'
import React from 'react'
import { MdContactPage, MdDownload, MdHome } from 'react-icons/md'
import MainLink from '../components/MainLink'
import Profile from '../components/Profile'

interface layoutProps {
  title: string
  children?: React.ReactNode
}

const Index = ({ title, children }: layoutProps) => {
  const [opened, setOpened] = React.useState(false)

  return (
    <>
      <Head>
        <title>{`Bayo.se - ${title}`}</title>
      </Head>

      <Container
        size="xl"
        p="0"
        sx={() => ({
          display: 'flex',
          width: '100%'
        })}
      >
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          height="100vh"
          width={{ sm: 200, lg: 200 }}
        >
          <Navbar.Section grow mt="md">
            <MainLink
              icon={<MdHome />}
              label="Home"
              link="/"
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

        <Paper
          sx={(theme) => ({
            width: '100%',
            height: '100%',
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
          })}
        >
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
          <Profile />
          <Paper sx={{ height: '100%', width: '100%' }} p="lg">
            {children}
          </Paper>
        </Paper>
      </Container>
      {/*  </Center> */}
    </>
  )
}

export default Index
