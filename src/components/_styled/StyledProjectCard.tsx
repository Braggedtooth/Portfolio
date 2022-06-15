import styled from 'styled-components'

const StyledProjectCard = styled.div((props) => ({
  backgroundColor:
    props.theme.colorScheme === 'light'
      ? props.theme.colors.white
      : props.theme.colors.black,
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  margin: '10px',
  textAlign: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 'auto',
  width: '20rem',
  color:
    props.theme.colorScheme === 'light'
      ? props.theme.colors.black
      : props.theme.colors.white,
  textDecoration: 'none',
  transition: ' transform 150ms ease, box-shadow 150ms ease',
  div: {
    display: 'flex',
    padding: '10px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  ':hover': {
    cursor: 'pointer',
    transform: 'scale(1.03) translateY(-3px)',
    boxShadow:
      ' 0 1px 2px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.03) ,0 4px 8px rgba(0, 0, 0, 0.03), 0 8px 16px rgba(0, 0, 0, 0.03), 0 16px 32px rgba(0, 0, 0, 0.03), 0 32px 64px rgba(0, 0, 0, 0.03)',
    h2: {
      color: props.theme.colors.secondary
    }
  }
}))

export default StyledProjectCard
