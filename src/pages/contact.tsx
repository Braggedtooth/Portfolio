import { Box } from '@mantine/core'
import React, { ReactElement } from 'react'
import Layout from '../layout'


const Contact = () => {
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
      contact
    </Box>
  )
}

export default Contact
Contact.getLayout = (page: ReactElement) => (
  <Layout title="Contact">{page}</Layout>
)
