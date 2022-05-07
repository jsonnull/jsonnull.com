const plugin = require('tailwindcss/plugin')
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cloud: {
          900: '#17171A',
          800: '#202024',
          700: '#2C2C30',
          600: '#4A484D',
          500: '#8D8F91',
          400: '#BABAB5',
          300: '#E6DFD6',
          200: '#F5F1EB',
          100: '#FFFFFF', // FIXME
        },
        sky: '#9BA1E7',
        fog: '#707EC4',
        steel: '#6D7599',
        dragon: '#FF3B3E',
        horizon: '#E8B82A',
        serpent: '#2EFF3D',
        seafoam: '#2EFF93',
      },
    },
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ]
    },
  },
  variants: {},
  plugins: [
    plugin(
      function patternColors({ matchUtilities, theme }) {
        matchUtilities(
          {
            'pattern-lines': (value) => {
              return {
                'background-size': `${value} ${value}`,
                'background-image':
                  'repeating-linear-gradient(-45deg, var(--tw-pattern-fg) 0, var(--tw-pattern-fg) 0.5px, var(--tw-pattern-bg) 0, var(--tw-pattern-bg) 50%)',
              }
            },
          },
          { values: theme('patternSize') }
        )
      },
      {
        theme: {
          patternSize: {
            sm: '4px',
            DEFAULT: '8px',
          },
        },
      }
    ),
    plugin(function patternColors({ matchUtilities, theme }) {
      matchUtilities(
        {
          'pattern-bg': (color) => ({
            '--tw-pattern-bg': color,
          }),
          'pattern-fg': (color) => ({
            '--tw-pattern-fg': color,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    }),
  ],
}
