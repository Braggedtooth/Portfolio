import { Badge } from '@mantine/core'

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
