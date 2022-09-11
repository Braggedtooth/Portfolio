import { Anchor } from '@mantine/core'
import { ReactElement } from 'react'
import { MdTab } from 'react-icons/md'
import Layout from '../layout'

const Resume = () => {
  const resume = 'resume_adebayo_ajayi.pdf'
  return (
    <div style={{ height: '100%' }}>
      <iframe
        src={`${resume}`}
        title="Resume"
        height="90%"
        width="100%"
        style={{ border: 'none' }}
      />
      <Anchor
        color="orange"
        href={resume}
        target="_blank"
        aria-label="open resume in new tab"
      >
        Open in new tab <MdTab size={15} />
      </Anchor>
    </div>
  )
}

export default Resume
Resume.getLayout = (page: ReactElement) => (
  <Layout title="Resume">{page}</Layout>
)
