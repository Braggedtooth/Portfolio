import { ReactNode } from 'react'
import { Anchor as MantineAnchor } from '@mantine/core'

interface AnchorProps {
  href?: string
  children: ReactNode
  [x: string]: any
}
const Anchor = ({ href, children, ...rest }: AnchorProps) => {
  return (
    <MantineAnchor component="a" href={href} {...rest}>
      {children}
    </MantineAnchor>
  )
}

export default Anchor
