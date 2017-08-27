import { css } from 'styled-components'

export const background = (color) => css`
  // Clear descendors from underline
  text-shadow:
    3px 0 ${color}, 
    2px 0 ${color},
    1px 0 ${color},
    -1px 0 ${color},
    -2px 0 ${color},
    -3px 0 ${color};
`

export const color = (color) => css`
  // Underline via gradient background
  color: ${color};
  text-decoration: none;

  background-repeat: no-repeat;
  background-size: 100% 1px;
  background-position: 0 95%;

  transition: background-size 100ms ease-in;

  // Tweak position + thickness for high res (1.75x and up) displays
  @media (-webkit-min-device-pixel-ratio: 1.75), (min-resolution: 168dpi) {
    background-position: 0 93%;
  }

  background-image: linear-gradient(${color} 0%, ${color} 100%);
`

export const underlineOut = css`
  background-size: 0 1px;
`

export const underlineIn = css`
  background-size: 100% 1px;
`

