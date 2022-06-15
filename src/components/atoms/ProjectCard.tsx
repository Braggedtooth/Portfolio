import React from 'react'
import Image from 'next/image'
import StyledProjectCard from '../_styled/StyledProjectCard'

const ProjectCard = () => {
  return (
    <StyledProjectCard as="a" href="#">
      <div
        style={{
          borderTopLeftRadius: '10px',
          backgroundColor: '#343A40',
          border: '1px solid #343A40',
          borderBottom: 'none',
          borderTopRightRadius: '10px',
          height: '50%'
        }}
      >
        <Image
          src="https://picsum.photos/200/300/?blur=1"
          alt="project image"
          width="100"
          height="100"
          style={{ borderRadius: '20px' }}
        />
      </div>
      <div
        style={{
          height: '50%',
          backgroundColor: '#212529',
          border: '1px solid #343A40',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px'
        }}
      >
        <h1>Project Card</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          blanditiis
        </p>
      </div>
    </StyledProjectCard>
  )
}

export default ProjectCard
