import Image from 'next/image'
import React from 'react'
import StyledProfileImageContainer from '../_styled/StyledImageContainer'

interface ProfileImageProps {
  src: string
}



const ProfileImage = ({ src }: ProfileImageProps) => {
  return (
    <StyledProfileImageContainer>
      <Image src={src} alt="Profile Picture" height="200px" width=" 200px" />
    </StyledProfileImageContainer>
  )
}

export default ProfileImage
