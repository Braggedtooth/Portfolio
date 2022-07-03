import Technologies from './technologies'

export default interface IProject {
  id: number
  name: string
  description: string
  github: string
  website?: string
  image: string
  technologies: Technologies[]
}
