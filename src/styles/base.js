const mapValues = (object, callback) => {
  return Object.keys(object).reduce((acc, label) => {
    acc[label] = callback(object[label])
    return acc
  }, {})
}

export const fonts = {
  base: `
    /* 1 */ -apple-system, BlinkMacSystemFont,
    /* 2 */ "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    /* 3 */ "Helvetica Neue", sans-serif;
  `,
  serif: `
		/* 1 */ Athelas,
		/* 2 */ Cambria,
		/* 3 */ serif;
	`,
  heading: 'Lato',
  monospace: 'Source Code Pro'
}

// Line height as multiplier
const lineHeightMultiplier = 1.625

// Target heights in rem
const lineHeights = {
  tiny: 1.8,
  small: 2.2,
  normal: 2.6,
  medium: 3.0,
  large: 3.9,
  huge: 5
}

export const lineHeight = mapValues(
  lineHeights,
  lineHeight => `${lineHeight}rem`
)

export const fontSize = mapValues(
  lineHeights,
  lineHeight => `${lineHeight / lineHeightMultiplier}rem`
)

export const lineUnit = lineHeight.normal

export const colors = {
  gray100: '#f7f7f7',
  gray200: '#f0f0f0',
  gray300: '#e0e0e0',
  gray400: '#c4c4c4',
  gray500: '#999',
  gray600: '#5d5d5d',
  gray900: '#171717',

  green100: '#d9fccf',
  green200: '#b7f6a7',
  green300: '#91e782',
  green400: '#69cd62',
  green500: '#46a54c',
  green600: '#2b6e3b',
  green900: '#112e1d',

  blue100: '#f0f6ff',
  blue200: '#dbecff',
  blue300: '#b7d5ff',
  blue400: '#80aff9',
  blue500: '#3a7ade',
  blue600: '#163388',
  blue900: '#030729',

  white: '#fff',

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
  // mobile: '480px',
  tablet: '800px',
  desktop: '1200px'
}

// Iterate through the sizes and create a media template
export const media = mapValues(
  breakpoints,
  breakpointPx => `@media (min-width: ${breakpointPx})`
)
