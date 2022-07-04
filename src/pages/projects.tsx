import { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import { Box, MediaQuery } from '@mantine/core'
import { REVALIDATE_SECONDS } from '../utils/constants'
import IProject from '../types/projects'
import getProjectData from '../data/project'
import ProjectCard from '../components/molecules/ProjectCard'
import Layout from '../layout'
import getUserData from '../data/user'

type projectProps = {
  projects: IProject[]
}
const Projects = ({ projects }: projectProps) => {
  return (
    <MediaQuery
      largerThan="sm"
      styles={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        flex: '1 ',
        flexBasis: '100%',
        width: '100%'
      }}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          padding: '1.5rem',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '0 0.5rem 0.5rem 0',
          backgroundColor: theme.colors.grey,
          alignItems: 'flex-start'
        })}
      >
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />
        })}
      </Box>
    </MediaQuery>
  )
}

export default Projects
Projects.getLayout = (page: ReactElement) => (
  <Layout title="Projects">{page}</Layout>
)
export const getStaticProps: GetStaticProps = async () => {
  const user = await getUserData()
  const projects = await getProjectData()
  return {
    props: {
      projects,
      user
    },
    revalidate: REVALIDATE_SECONDS
  }
}
