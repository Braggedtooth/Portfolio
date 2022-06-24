import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import { lighten } from 'polished'
import { REVALIDATE_SECONDS } from '../utils/constants'
import { IProject } from '../types/projects'
import getProjectData from '../data/project'
import ProjectCard from '../components/atoms/ProjectCard'
import Layout from '../layout'
import theme from '../config/theme'
import getUserData from '../data/user'

type projectProps = {
  projects: IProject[]
}
const Projects = ({ projects }: projectProps) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '0.5rem',
        margin: '0 0.5rem',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderRadius: '0 0.5rem 0.5rem 0',
        backgroundColor: lighten(0.1, theme.colors.grey),
        alignItems: 'flex-start'
      }}
    >
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />
      })}
    </div>
  )
}

export default Projects
Projects.getLayout = (page: ReactElement, props: projectProps) => (
  <Layout data={props}>{page}</Layout>
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
