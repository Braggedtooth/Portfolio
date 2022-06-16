import styled from 'styled-components'

const StyledContactPill = styled.a`
  width: 250px;
  height: auto;
  max-width: 300px;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  font-size: 1.05rem;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin-top: 1.5rem;
  &:hover: {
    color: blue;
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export default StyledContactPill
