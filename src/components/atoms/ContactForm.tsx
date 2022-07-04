import { Button, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import React from 'react'
import encodeJson from '../../utils/encodeJson'

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
  const onSubmit = (data: FormPost) => {
    if (data.name.length < 2) {
      return form.setFieldError('name', 'Name is too short')
    }
    if (data.message.length < 20) {
      return form.setFieldError('message', 'Message is too short')
    }
    setLoading(true)
    fetch('/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeJson({ 'form-name': 'contact', ...data })
    })
      .then(() => setSubmitted('success'))
      .catch((err) => {
        setSubmitted('error')
        // eslint-disable-next-line no-console
        console.error(err)
      })
    setLoading(false)
    return form.reset()
  }

  React.useEffect(() => {
    setCharCount(form.values.message.length)
  }, [form.values.message])

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={form.onSubmit(onSubmit)}
    >
      <div hidden>
        <TextInput
          hidden
          name="bot-field"
          label="Do not fill this out if you are human:"
        />
      </div>
      <TextInput
        name="name"
        id="name"
        label="Name"
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
        label={`Message - (${charCount}/200)`}
        placeholder="Your message"
        minRows={4}
        maxLength={200}
        error={form.errors.message}
        {...form.getInputProps('message')}
      />
      <Button
        type="submit"
        aria-label="submit form"
        disabled={!!sucess}
        loading={loading}
      >
        {!sucess ? 'Submit' : 'Submitted'}
      </Button>
    </form>
  )
}
