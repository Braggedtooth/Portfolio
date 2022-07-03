/* import Image from 'next/image'
import React from 'react'
import ImageContainer from '../_styled/StyledImageContainer'

interface ProfileImageProps {
  src: string
}



const ProfileImage = ({ src }: ProfileImageProps) => {
  return (
    <ImageContainer>
      <Image src={src} alt="Profile Picture" height="200px" width=" 200px" />
    </ImageContainer>
  )
}

export default ProfileImage

 */
import { Container, useMantineTheme } from '@mantine/core'

const ImageContainer = ({ children }) => {
  const theme = useMantineTheme()
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '200px',
        width: '200px',
        justifyContent: 'center',
        borderRadius: '25px',
        padding: 0,
        boxShadow: `0 0 10px 1px ${theme.colors.gray[2]}`
      }}
    >
      {children}
    </Container>
  )
}

export default ImageContainer
