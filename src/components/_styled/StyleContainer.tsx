import styled, { CSSObject } from 'styled-components'
import Theme from '../../types/theme'

interface ContainerProps {
  border?: boolean
  height?: string
  width?: string
  backgroundColor?: string
  borderRadius?: string
  style?: CSSObject
  theme?: Theme
}
const StyledContainer = styled.div((props: ContainerProps) => ({
  backgroundColor: props.backgroundColor,
  color:
    props.theme.colorScheme === 'light'
      ? props.theme.colors.black
      : props.theme.colors.white,
  fontFamily: props.theme.font.family.primary,
  height: props.height || '100%',
  width: props.width || '100%',
  border: (props.border && `1px solid ${props.theme.colors.white}`) || 'none',
  borderRadius: props.borderRadius || '0',
  ...props.style
}))

export default StyledContainer
