import { Box, Title, Text } from '@mantine/core'
import React from 'react'
import ContactForm from '../components/atoms/ContactForm'
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
      <Title p="xs">Say Hello👋</Title>
      {status === 'success' && (
        <Text align="center" color="green" p="xs">
          {' '}
          Summision recieved, i will be in touch
        </Text>
      )}
      {status === 'error' && <Text> Summision failed,try again later...</Text>}
      <ContactForm setSubmitted={setStatus} sucess={success} />
    </Box>
  )
}

export default Contact
Contact.getLayout = (page: React.ReactElement) => (
  <Layout title="Contact">{page}</Layout>
)
