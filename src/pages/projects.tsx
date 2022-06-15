import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import { REVALIDATE_SECONDS } from '../utils/constants'
import { IProject } from '../types/projects'
import ProjectData from '../data/project'
import ProjectCard from '../components/atoms/ProjectCard'
import Layout from '../layout'
import UserData from '../data/user'

type projectProps = {
  projects: IProject[]
}
const Projects = ({ projects }: projectProps) => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />
        })}
      </div>
    </div>
  )
}

export default Projects
Projects.getLayout = (page: ReactElement, props: projectProps) => (
  <Layout data={props}>{page}</Layout>
)
export const getStaticProps: GetStaticProps = async () => {
  const user = await UserData
  const projects = await ProjectData
  return {
    props: {
      projects,
      user
    },
    revalidate: REVALIDATE_SECONDS
  }
}
