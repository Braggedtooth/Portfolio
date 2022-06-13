import React from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'

const StyledContactPill = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  background-color: #eff0f1;
  font-size: 1.15rem;
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0.5rem;
`
interface ContactPillProps {
  Icon: IconType
  details: string
}
const StledIconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  margin: 0.5rem;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: #333;
  margin-right: 2.5rem;
`
const ContactPill = ({ Icon, details }: ContactPillProps) => {
  return (
    <StyledContactPill>
      <StledIconContainer>
        <Icon size={20} style={{ padding: '0.5rem' }} />
      </StledIconContainer>
      <p>{details}</p>
    </StyledContactPill>
  )
}

export default ContactPill
