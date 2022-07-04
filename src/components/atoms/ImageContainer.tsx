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
