import axios from 'axios'

export type technologies =
  | 'Nodejs'
  | 'Express'
  | 'MongoDB'
  | 'React'
  | 'Nextjs'
  | 'Laravel'
  | 'Angular'
  | 'API'
  | 'Typescript'
  | 'Nestjs'
  | 'Prisma'
  | 'Javascript'
  | 'React Native'
  | 'Others'
  | 'Docker'
  | 'Git'
export interface ProjectType {
  id: number
  name: string
  description: string
  github: string
  website?: string
  image: string
  technologies: technologies[]
}

export const ProjectData: Promise<ProjectType[]> = axios
  .get('https://braggedtooth.github.io/portfolio-data/project.json')
  .then((res) => res.data.projects)
