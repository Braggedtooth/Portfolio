import { Anchor, Stack, Title } from '@mantine/core'
import { ReactElement } from 'react'
import { MdTab } from 'react-icons/md'
import Layout from '../layout'

const Resume = () => {
  const resume = 'resume_adebayo_ajayi.pdf'
  return (
    <Stack style={{ height: '60vh' }} px="xl">
      <Title order={2} align="left" pt="sm">
        Resumé📄
      </Title>
      <iframe
        src={`${resume}`}
        title="Resume"
        height="100%"
        width="100%"
        style={{ border: 'none', flexGrow: 1 }}
      />
      <Anchor
        color="teal"
        href={resume}
        target="_blank"
        aria-label="open resume in new tab"
      >
        Open in new tab <MdTab size={15} />
      </Anchor>
    </Stack>
  )
}

export default Resume
Resume.getLayout = (page: ReactElement) => (
  <Layout title="Resume">{page}</Layout>
)
