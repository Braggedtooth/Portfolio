/* eslint-disable no-console */
import { Button, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import React from 'react'
import encodeJson from '../../utils/encodeJson'

interface FormPost {
  name: string
  email: string
  message: string
}

export default function ContactForm({ setSubmitted }) {
  const [charCount, setCharCount] = React.useState(0)

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
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeJson({ 'form-name': 'contact', ...data })
    })
      .then(() => console.log('Success!'))
      .catch((err) => console.log(err))

    setSubmitted(true)
    console.log(data)
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
      onSubmit={form.onSubmit(onSubmit)}
    >
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
      <Button type="submit" aria-label="submit form" title="Submit">
        Submit
      </Button>
    </form>
  )
}
