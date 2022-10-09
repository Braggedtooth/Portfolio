import Technologies from '../types/technologies'

interface IProject {
  id: number
  name: string
  description: string
  github: string
  website?: string
  image: string
  technologies: Technologies[]
}

const projectData: IProject[] = [
  {
    id: 0,
    name: 'Extenso',
    website: 'https://www.extenso.se/',
    technologies: [
      'Fullstack',
      'React',
      'Nextjs',
      'TRPC',
      'Prisma',
      'API',
      'Git',
      'Typescript'
    ],
    description:
      'This application helps my client to streamline thier workflow instead of using excel sheet and sending emails to thier client they can file reports online in the app thier clients are immediatly notified and can log in to monitor their projects also notifing the agent automatically when the reports have been read with the oppurtunity to comment on the report right in the app saving valuable time for both the client and the agent.',
    github: '',
    image: '/images/extenso.png'
  },
  {
    id: 1,
    name: 'Realtor Rating',
    website: 'https://mv.bayo.se',
    technologies: [
      'Fullstack',
      'Nestjs',
      'Express',
      'MongoDB',
      'Git',
      'Typescript'
    ],
    description:
      'Web application for searching and reviewing swedish realtors built with express rest api and nextjs frontend',
    github: 'https://github.com/Braggedtooth/MV-Frontend',
    image: '/images/mv.png'
  },
  {
    id: 2,
    name: 'Tryggsurf',
    website: 'https://www.tryggsurf.se/',
    technologies: ['Frontend', 'React', 'Nextjs', 'Git', 'Typescript'],
    description: 'Landing page for a client built with nextjs.',
    github: '',
    image: '/images/tryggsurf.png'
  },

  {
    id: 3,
    name: 'Viabay',
    website: 'https://www.viabay.se/',
    technologies: ['Frontend', 'Astro', 'Git', 'Typescript'],
    description: 'WIP, landing page for my company built with astro.',
    github: 'https://github.com/viabay-ab/viabay.se',
    image: 'https://via.placeholder.com/400x400'
  }
]

export default projectData
