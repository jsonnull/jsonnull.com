import { css } from 'styled-components'

export const fonts = {
  base: `
    /* 1 */ -apple-system, BlinkMacSystemFont,
    /* 2 */ "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    /* 3 */ "Helvetica Neue", sans-serif;
  `,
  heading: 'Lato',
  serif: 'Cardo',
  content: 'Merriweather',
  monospace: 'Source Code Pro'
}

export const fontSize = {
  tiny: '1.1rem',
  small: '1.4rem',
  normal: '1.6rem',
  medium: '1.8rem',
  large: '2.4rem',
  huge: '3rem'
}

export const lineUnit = '2.4rem'

export const colors = {
  white: '#fbfffd',
  lightGray: '#D3D8D3' /* #E7EAE1; */,
  veryLightGray: '#F2F7F0',
  gray: '#838784',
  darkGray: '#464C4B',
  black: '#18191C',

  blue: '#3A7ADE',
  red: '#b52f3f',
  orange: '#f57a00',
  green: '#92b246'
}

export const breakpoints = {
  mobileSmall: '300px',
  mobile: '480px',
  tablet: '800px',
  tabletLarge: '960px',
  desktop: '1050px',
  desktopLarge: '1200px',
  desktopHuge: '1400px'
}

// Iterate through the sizes and create a media template
export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `

  return acc
}, {})
