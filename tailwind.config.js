module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '1.5xl': ['22px', '26px']
      }
    },
    colors: {
      transparent: 'transparent',
      white: {
        DEFAULT: '#ffffff',
        secondary: '#ECECEC'
      },
      black: '#0f0f0f',
      blue: {
        DEFAULT: '#0D42FF',
        secondary: '#4AA0BA'
      },
      red: '#D56E72',
      violet: '#8A77CB',
      gray: {
        100: '#A1A1A1',
        200: '#858484',
        300: '#3F3F3F'
      },
      emerald: '#4AA0BA'
    },
    container: {
      center: true,
    },
    fontFamily: {
      'sans': ['SourceSansPro', 'ui-sans-serif', 'system-ui']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
