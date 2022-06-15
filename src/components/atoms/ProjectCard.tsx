import React from 'react'
import Image from 'next/image'
import StyledProjectCard from '../_styled/StyledProjectCard'
import StyledContainer from '../_styled/StyleContainer'
import theme from '../../config/theme'
import { IProject } from '../../types/projects'
import truncate from '../../utils/truncate'

const ProjectCard = ({ project }: { project: IProject }) => {
  const { image, description, name } = project
  return (
    <StyledProjectCard as="a" href="#">
      <StyledContainer
        height="50%"
        width="auto"
        backgroundColor={theme.colors.grey}
        borderRadius="10px 10px 0 0"
      >
        {image && (
          <Image
            src={image}
            alt="project image"
            width="100"
            height="100"
            style={{ borderRadius: '20px' }}
          />
        )}
        <h2 style={{ padding: 0, margin: 0 }}>{name}</h2>
      </StyledContainer>
      <StyledContainer
        width="auto"
        style={{
          height: '50%',
          borderTop: '1px solid #fff',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px'
        }}
      >
        <p>{truncate(description, 50)}</p>
      </StyledContainer>
    </StyledProjectCard>
  )
}

export default ProjectCard
