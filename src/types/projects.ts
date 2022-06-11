import Technologies from './technologies'

export interface IProject {
  id: number
  name: string
  description: string
  github: string
  website?: string
  image: string
  technologies: Technologies[]
}
