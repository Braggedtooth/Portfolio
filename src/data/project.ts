import axios from 'axios'
import { IProject } from '../types/projects'

const ProjectData: Promise<IProject[]> = axios
  .get('https://braggedtooth.github.io/portfolio-data/project.json')
  .then((res) => res.data.projects)

export default ProjectData
