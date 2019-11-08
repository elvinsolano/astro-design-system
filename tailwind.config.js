module.exports = {
  // corePlugins: [
  //   'fontSize'
  // ],
  theme: {
    extend: {
      height: {
        'banner': '560px'
      },
      width: {
        'aside': '230px'
      },
      ml: {
        'aside': '230px',
        //'64': '60px',
      },
      mt: {
        //'16': '60px',
      },
      mr: {
        //'16': '60px',
      },
      pl: { 
        //'16': '60px',
      },
      pt: {
        //'16': '60px',
      },
      pr: {
        //'16': '60px',
      },
      spacing: {
        pb: {
        '4.5': '1.45rem'
        }
      },
      colors: {
        greyStatus: {
          100: '#F2F2F2',
          200: '#D5D5D5',
          300: '#ABABAB',
          400: '#7D7D7D',
          500: '#575757',
          600: '#333333',
          700: '#2D2D2D',
        },
        status: {
          100: '#C52A1A',
          200: '#FFBF1F',
          300: '#4EAD58',
          400: '#3872A4',
        },
        data: {
          100: '#FFC42C',
          200: '#D5D5D5',
          300: '#B579CE',
          400: '#2E7BF8',
          500: '#008387',
          600: '#FFE08F',
          700: '#E27588',
          800: '#D3B0E2',
          900: '#6CA2FA',
          1000: '#4CA8AB',
        },
        placeholder: {
          100: '#FFFFFF',
          200: '#F8F8F8',
          300: '#2D2D2D',
        }
      },
      width: {
        grid: "320px"
      }, 
    }, 
    container: {
      center: true
    },
    fontFamily: {
      sans: 'var(--font-family-sans)',
      serif: 'var(--font-family-serif)',
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: 'var(--size-font-xs)',
      sm: 'var(--size-font-sm)',
      base: 'var(--size-font-base)',
      lg: 'var(--size-font-lg)',
      xl: 'var(--size-font-xl)',
      '2xl': 'var(--size-font-2-xl)',
      '3xl': 'var(--size-font-3-xl)',
      '4xl': 'var(--size-font-4-xl)',
      '5xl': 'var(--size-font-5-xl)',
      '6xl': 'var(--size-font-6-xl)',
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.45rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      grey: {
        100: '#F2F2F2',
        200: '#E8E8E8',
        300: '#424242',
        400: '#575757',
        500: '#DBDBDB',
        600: '#ABABAB',
        700: '#DEDEDE',
        800: '#BCBCBC',
        900: '#1a202c',
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#E0301E',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      },
      orange: {
        100: '#fffaf0',
        200: '#feebc8',
        300: 'var(--colors-orange-300)',
        400: 'var(--colors-orange-400)',
        500: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e',
      },
      yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210',
      },
      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#22992E',
        900: '#22543d',
      },
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#var(--colors-teal-300)',
        400: '#var(--colors-teal-300)',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
      },
      blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3F88C5',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
      },
      indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b',
      },
      purple: {
        100: '#faf5ff',
        200: '#e9d8fd',
        300: '#d6bcfa',
        400: '#b794f4',
        500: '#9f7aea',
        600: '#805ad5',
        700: '#6b46c1',
        800: '#553c9a',
        900: '#44337a',
      },
      pink: {
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459',
      },
    },
    linearGradients: {
      directions: { // defaults to these values
        'button': '177deg',
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: {
        'primary': ['var(--colors-orange-300)', 'var(--colors-orange-400)'],
        'secondary': ['var(--colors-teal-300)', 'var(--colors-teal-400)'],
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    maxWidth: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      button: '28px',
      full: '9999px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 2px 9px 0 rgba(0,0,0,0.10)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    }, 
  },
  variants: {},
  plugins: [
    require('tailwindcss-gradients')()
  ]
}
