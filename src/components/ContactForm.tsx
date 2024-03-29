import {
  Button,
  Group,
  Stack,
  Textarea,
  TextInput,
  useMantineTheme
} from '@mantine/core'
import { useForm } from '@mantine/hooks'
import axios from 'axios'
import React from 'react'
import { MdCheckCircleOutline, MdOutlineCancel } from 'react-icons/md'
import { EMIAL_REGEX } from '../utils/constants'

interface FormPost {
  name: string
  email: string
  message: string
}
interface FormProps {
  sucess: boolean
  setSubmitted: React.Dispatch<React.SetStateAction<'success' | 'error'>>
}
export default function ContactForm({ sucess, setSubmitted }: FormProps) {
  const [charCount, setCharCount] = React.useState(0)
  const [loading, setLoading] = React.useState(false)
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: ''
    } as FormPost
  })
  /**
   * Given a string, return true if it's a valid email address, otherwise return false.
   * @param {string} email - string - the email address to validate
   * @returns The result of the test.
   */
  const isValidEmail = (email: string) => {
    return !!EMIAL_REGEX.test(email)
  }
  /**
   * If the name is less than 2 characters, set the name field error to 'Name is too short'. If the
   * message is less than 20 characters, set the message field error to 'Message is too short'. If the
   * email is invalid, set the email field error to 'Email is invalid'. If all of the above conditions
   * are met, set the loading state to true, post the data to the API, set the submitted state to
   * success, set the loading state to false, and reset the form.
   * @param {FormPost} data - FormPost - this is the type of the data that is being submitted.
   * @returns The return value of the onSubmit function is the return value of the last function called.
   */
  const onSubmit = (data: FormPost) => {
    if (data.name.length < 2) {
      return form.setFieldError('name', 'Name is too short')
    }
    if (data.message.length < 20) {
      return form.setFieldError('message', 'Message is too short')
    }
    if (isValidEmail(data.email) === false) {
      return form.setFieldError('email', 'Email is invalid')
    }
    setLoading(true)
    axios
      .post('api/submit', data)
      .then(() => setSubmitted('success'))
      .catch(() => {
        setSubmitted('error')
      })
    setLoading(false)
    return form.reset()
  }

  React.useEffect(() => {
    setCharCount(form.values.message.length)
  }, [form.values.message])
  const theme = useMantineTheme()
  return (
    <Stack p="xl">
      <form name="contact" onSubmit={form.onSubmit(onSubmit)}>
        <TextInput
          name="name"
          id="name"
          label="Name"
          type="text"
          placeholder="Your name"
          required
          {...form.getInputProps('name')}
          error={form.errors.name}
        />

        <TextInput
          name="email"
          id="email"
          label="Email"
          placeholder="Your email"
          type="email"
          required
          error={form.errors.email}
          {...form.getInputProps('email')}
        />
        <Textarea
          required
          label={`Message - (${charCount}/200) `}
          rightSectionProps={{
            style: {
              display: 'flex',
              paddingTop: '5px',
              flexDirection: 'column',
              justifyContent: 'flex-start'
            }
          }}
          rightSection={
            // eslint-disable-next-line no-nested-ternary
            charCount > 0 ? (
              charCount > 20 ? (
                <MdCheckCircleOutline
                  size={20}
                  stroke="2.5"
                  color={theme.colors.teal[6]}
                />
              ) : (
                <MdOutlineCancel size={20} stroke="2.5" />
              )
            ) : null
          }
          styles={{
            label: {
              color: charCount > 20 && theme.colors.teal[3]
            }
          }}
          placeholder="Your message"
          minRows={4}
          maxLength={200}
          error={form.errors.message}
          {...form.getInputProps('message')}
        />
        <Group position="right">
          <Button
            type="submit"
            aria-label="submit form"
            disabled={!!sucess}
            my="md"
            color="teal"
            loading={loading}
          >
            {!sucess ? 'Submit' : 'Submitted'}
          </Button>
        </Group>
      </form>
    </Stack>
  )
}
