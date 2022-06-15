import Theme from '../types/theme'

const theme: Theme = {
  colorScheme: 'dark',
  colors: {
    white: '#FFFFFC',
    black: '#212529',
    grey: '#343A40',
    primary: '#048A81',
    secondary: '#F79256',
    link: '#72DDF7'
  },
  font: {
    size: {
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '20px',
      xl: '24px'
    },
    family: {
      primary: '"Exo", sans-serif',
      secondary: '"Roboto", sans-serif'
    },
    weight: {
      light: '300',
      regular: '400',
      bold: '700'
    }
  },
  breakpoint: {
    xs: '576px',
    sm: '768px',
    md: '	992px',
    lg: '1200px',
    xl: '1400px'
  }
}

export default theme
