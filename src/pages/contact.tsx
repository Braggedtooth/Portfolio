import { Box, Title, Text } from '@mantine/core'
import React from 'react'
import ContactForm from '../components/atoms/ContactForm'
import Layout from '../layout'

const Contact = () => {
  const [success, setSuccess] = React.useState(false)

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem',
        margin: '0 0.5rem',
        width: '100%',
        backgroundColor: theme.colors.grey,
        alignItems: 'flex-start'
      })}
    >
      <Title>Contact Me</Title>
      {success && <Text> Summision Recieved,i Will be in touch</Text>}
      <ContactForm setSubmitted={setSuccess} />
    </Box>
  )
}

export default Contact
Contact.getLayout = (page: React.ReactElement) => (
  <Layout title="Contact">{page}</Layout>
)
