import { useRouter } from 'next/router'
import React from 'react'
import Button from '../components/atoms/button'
import { ProjectData, ProjectType } from '../data/project'
import { REVALIDATE_SECONDS } from '../utils/constants'

type projectProps = {
  projects: ProjectType[]
}
const Projects = ({ projects }: projectProps) => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [Sproject, setProject] = React.useState<ProjectType | null>(null)
  const handleSelect = (selectedProject: ProjectType) => {
    setProject(selectedProject)
    setOpen(true)
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
            >
              open
            </Button>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
export const getStaticProps = async () => {
  const projects = await ProjectData
  return {
    props: {
      projects
    },
    revalidate: REVALIDATE_SECONDS
  }
}
