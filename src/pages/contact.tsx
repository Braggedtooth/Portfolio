import { Stack, Text, Title } from '@mantine/core'
import React from 'react'
import ContactForm from '../components/ContactForm'
import Layout from '../layout'

const Contact = () => {
  const [status, setStatus] = React.useState<'success' | 'error'>()
  const [success, setSuccess] = React.useState<boolean>(false)
  React.useEffect(() => {
    if (status === 'success') {
      setSuccess(true)
    }
  }, [status])

  return (
    <Stack sx={{ height: '100%', width: '100%' }}>
      <Title order={2} align="left" px="xl" pt="sm">
        Contact Me 👋
      </Title>
      {status === 'success' && (
        <Text align="center" color="green" p="xs">
          Message sent!
        </Text>
      )}
      {status === 'error' && (
        <Text align="center" color="red" p="xs">
          Could not deliver your message, try again later...
        </Text>
      )}
      <ContactForm setSubmitted={setStatus} sucess={success} />
    </Stack>
  )
}

export default Contact
Contact.getLayout = (page: React.ReactElement) => (
  <Layout title="Contact">{page}</Layout>
)
