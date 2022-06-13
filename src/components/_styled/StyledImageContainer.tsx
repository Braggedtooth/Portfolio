import styled from 'styled-components'

const StyledProfileImageContainer = styled.div`
  width: 250px;
  height: 250px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #333;
  border-radius: 20%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 0 10px 1px #6b6b6b;
  }
  img {
    border-radius: 50%;
    object-fit: fit;
  }
`

export default StyledProfileImageContainer
