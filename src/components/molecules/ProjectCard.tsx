import { Box, Card } from '@mantine/core'
import Image from 'next/image'
import IProject from '../../types/projects'
import truncate from '../../utils/truncate'

const Container = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0]
        }
      })}
    >
      {children}
    </Box>
  )
}
const ProjectCard = ({ project }: { project: IProject }) => {
  const { image, description, name } = project
  return (
    <Card sx={{ margin: '0.5rem', width: '100%', minWidth: '10em' }}>
      <Container>
        {image && (
          <Image
            src={image}
            alt="project image"
            width="100"
            height="100"
            style={{ borderRadius: '20px' }}
          />
        )}
        <h2 style={{ padding: 0, margin: 0 }}>{name}</h2>
      </Container>
      <Container>
        <p>{truncate(description, 50)}</p>
      </Container>
    </Card>
  )
}

export default ProjectCard
