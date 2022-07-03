import { Box } from '@mantine/core'
import React, { ReactElement } from 'react'
import Layout from '../layout'
import IUser from '../types/user'

const Resume = () => {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        padding: '0.5rem',
        margin: '0 0.5rem',
        width: '100%',
        backgroundColor: theme.colors.grey,
        alignItems: 'flex-start'
      })}
    >
      resume
    </Box>
  )
}

export default Resume
Resume.getLayout = (page: ReactElement, user: IUser) => (
  <Layout data={user} title="Resume">
    {page}
  </Layout>
)
