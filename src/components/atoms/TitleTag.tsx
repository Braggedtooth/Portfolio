import { Badge } from '@mantine/core'
import React from 'react'

const TitleTag = ({ title }) => {
  return (
    <Badge
      sx={{
        color: '#fff',
        backgroundColor: '#333',
        borderRadius: '25px',
        overflow: 'hidden',
        margin: '0',
        paddingTop: '1rem',
        paddingBottom: '1rem'
      }}
    >
      {title}
    </Badge>
  )
}

export default TitleTag
