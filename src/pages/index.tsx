import { Paper, SimpleGrid, Stack, Title } from '@mantine/core'
import { GetStaticProps } from 'next'
import React from 'react'
import { IconType } from 'react-icons'
import { FaLaravel, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiMongodb, SiNestjs, SiPrisma, SiTypescript } from 'react-icons/si'
import {
  TbApi,
  TbBrandAngular,
  TbBrandDocker,
  TbBrandGit,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReactNative
} from 'react-icons/tb'
import BadgeCard from '../components/Projects'
import getProjectData from '../data/project'
import Layout from '../layout'
import IProject from '../types/projects'
import Technologies from '../types/technologies'
import { REVALIDATE_SECONDS } from '../utils/constants'

type Techs = Exclude<Technologies, 'Backend' | 'Frontend' | 'Fullstack'>

const TechIcons: Record<Techs, IconType> = {
  'React Native': TbBrandReactNative,
  Angular: TbBrandAngular,
  API: TbApi,
  Docker: TbBrandDocker,
  Express: TbApi,
  Git: TbBrandGit,
  Javascript: TbBrandJavascript,
  Laravel: FaLaravel,
  MongoDB: SiMongodb,
  Nestjs: SiNestjs,
  Nextjs: TbBrandNextjs,
  Nodejs: FaNodeJs,
  Prisma: SiPrisma,
  React: FaReact,
  Typescript: SiTypescript
}

const Index = ({ projects }: { projects: IProject[] }) => {
  return (
    <Stack
      align="center"
      sx={{ textAlign: 'center', height: '100%', width: '100%' }}
      justify="center"
    >
      <Paper radius={0}>
        <Title order={2} align="left" px="xl" pt="sm">
          Projects📂
        </Title>
        <SimpleGrid
          cols={2}
          p="xl"
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' }
          ]}
        >
          {projects.map((project) => {
            return (
              <BadgeCard
                website={project.website}
                github={project.github}
                key={project.id}
                image={project.image}
                title={project.name}
                country={project.technologies[0]}
                description={project.description}
                badges={project.technologies.slice(1).map((tech) => ({
                  label: tech,
                  emoji: TechIcons[tech]
                }))}
              />
            )
          })}
        </SimpleGrid>
      </Paper>
    </Stack>
  )
}

export default Index
Index.getLayout = (page: React.ReactElement) => (
  <Layout title="Home">{page}</Layout>
)
export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjectData()
  return {
    props: {
      projects
    },
    revalidate: REVALIDATE_SECONDS
  }
}
