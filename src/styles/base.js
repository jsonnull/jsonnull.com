import { css } from 'react-emotion'

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
  tiny: '1.107692rem', // * 1.625 = 1.8rem
  small: '1.358461rem', // * 1.625 = 2.2rem
  normal: '1.6rem', // * 1.625 = 2.6rem
  medium: '1.846153rem', // * 1.625 = 3.0rem
  large: '2.4rem', // * 1.625 = 3.9rem
  huge: '3.076923rem' // * 1.625 = 5rem
}

export const lineUnit = '2.4rem'

export const colors = {
  white: '#fff',
  veryLightGray: '#eee',
  lightGray: '#8793ab',
  gray: '#5c6c81',
  darkGray: '#2a3344',
  black: '#161b24',

  // @deprecated
  blue: '#3A7ADE',
  // @deprecated
  red: '#b52f3f',

  green: '#1ed9a1',
  cyan: '#9db7ad',
  yellow: '#eade65',
  purple: '#800140',
  orange: '#ee3107'
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
