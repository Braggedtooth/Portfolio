import styled from 'styled-components'

const StyledProfileImageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 0 10px 1px #6b6b6b;

  img {
    border-radius: 50%;
    object-fit: fit;
  }
`

export default StyledProfileImageContainer
