import React from 'react'
import styled from 'styled-components'

const SyledTitletag = styled.p`
  color: #fff;
  width: 100%;
  text-align: center;
  max-width: 200px;
  background-color: #333;
  border-radius: 25px;
  overflow: hidden;
  padding: 0.5rem;
  margin: 0.5rem;
`

const TitleTag = ({ title }) => {
  return <SyledTitletag> {title}</SyledTitletag>
}

export default TitleTag
