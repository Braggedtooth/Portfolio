import axios from 'axios'
import { IProject } from '../types/projects'

/**
 * It returns a promise of an array of IProjects.
 * @returns An array of objects
 */
const getProjectData = (): Promise<IProject[]> =>
  axios
    .get(
      'https://braggedtooth.github.io/portfolio-data/project.json' 
      /* 'https://cdn.statically.io/gh/Braggedtooth/portfolio-data/main/project.json' */
    )
    .then((res) => res.data.projects)

export default getProjectData
