import styled from 'styled-components'

const StyledProjectCard = styled.div((_props) => ({
  border: '1px solid #f5f5f5',
  backgroundColor: '#333',
  borderRadius: '10px',
  boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  margin: '10px',
  textAlign: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 'auto',
  width: '20rem',
  color: '#fff',

  textDecoration: 'none',
  transition: ' transform 150ms ease, box-shadow 150ms ease',
  div: {
    display: 'flex',
    padding: '10px',
    flexDirection: 'column',
    justifyContent: 'center',

    alignItems: 'center'
  },
  p: {
    fontFamily: 'Roboto,mono'
  },
  ':hover': {
    cursor: 'pointer',
    transform: 'scale(1.03) translateY(-3px)',
    boxShadow:
      ' 0 1px 2px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.03) ,0 4px 8px rgba(0, 0, 0, 0.03), 0 8px 16px rgba(0, 0, 0, 0.03), 0 16px 32px rgba(0, 0, 0, 0.03), 0 32px 64px rgba(0, 0, 0, 0.03)',
    p: {
      color: '#f33ff0'
    }
  }
}))

export default StyledProjectCard
