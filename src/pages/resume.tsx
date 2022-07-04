import { Anchor, Box } from '@mantine/core'
import React, { ReactElement } from 'react'
import { MdTab } from 'react-icons/md'
import Layout from '../layout'

const Resume = () => {
  return (
    <Box
      sx={(theme) => ({
        padding: '0.5rem',
        margin: '0 0.5rem',
        height: '90vh',
        width: '100%',
        backgroundColor: theme.colors.grey,
        alignItems: 'flex-start'
      })}
    >
      <iframe
        src="/resume.pdf"
        title="Resume"
        height="100%"
        width="100%"
        style={{ border: 'none' }}
      />
      <Anchor color="orange" href="resume.pdf" target="_blank">
        Open in new tab <MdTab size={15} />
      </Anchor>
    </Box>
  )
}

export default Resume
Resume.getLayout = (page: ReactElement) => (
  <Layout title="Resume">{page}</Layout>
)
