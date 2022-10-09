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

interface LayoutProps {
  title: string
  children?: React.ReactNode
}

const Index = ({ title, children }: LayoutProps) => {
  const [opened, setOpened] = React.useState(false)

  return (
    <>
      <Head>
        <meta name="theme-color" content="#fff" />
        <meta name="description" content="Adebayo Ajayi portfolio website." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="manifest" href="/manifest.json" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <style data-href="https://fonts.googleapis.com/css2?family=Exo:wght@100;300;400;700;900&display=swap" />
        <link rel="manifest" href="/site.webmanifest" />
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
          fixed
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
          my="xl"
          sx={(theme) => ({
            width: 'calc(100% - var(--mantine-navbar-width))',
            height: '100%',
            marginLeft: 'var(--mantine-navbar-width)',
            [theme.fn.smallerThan('sm')]: {
              margin: 0
            },
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
