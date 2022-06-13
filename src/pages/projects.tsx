import React from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { REVALIDATE_SECONDS } from '../utils/constants'
import { IProject } from '../types/projects'
import ProjectData from '../data/project'
import Button from '../components/atoms/button'



type projectProps = {
  projects: IProject[]
}
const Projects = ({ projects }: projectProps) => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [Sproject, setProject] = React.useState<IProject | null>(null)
  const handleSelect = (selectedProject: IProject) => {
    setProject(selectedProject)
    setOpen(!open)
    if (open) {
      setProject(null)
    }
  }

  return (
    <div>
      <h1>Projects</h1>
      <Button
        color="#fff"
        size={{ w: 120, h: 40 }}
        p={0}
        bg="#333"
        onClick={() => router.push('/')}
      >
        Home
      </Button>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <h1>{project.name}</h1>
            <p>{project.id === Sproject?.id && open && project.description}</p>
            <Button
              color="#fff"
              size={{ w: 120, h: 40 }}
              p={0}
              bg="#333"
              onClick={() => handleSelect(project)}
              label={project.id === Sproject?.id ? 'Close' : 'View'}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Projects
export const getStaticProps: GetStaticProps = async () => {
  const projects = await ProjectData
  return {
    props: {
      projects
    },
    revalidate: REVALIDATE_SECONDS
  }
}
