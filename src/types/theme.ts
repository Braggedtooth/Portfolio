interface FontSize {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}
interface Colors {
  primary: string
  secondary: string
  white: string
  black: string
  grey: string
  link: string
}
interface FontWeight {
  light: string
  regular: string
  bold: string
}
interface FontFamily {
  primary: string
  secondary: string
}
interface Font {
  size: FontSize
  weight: FontWeight
  family: FontFamily
}
interface Breakpoint {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}
export default interface Theme {
  colorScheme: 'light' | 'dark'

  colors: Colors
  font: Font
  breakpoint: Breakpoint
}
