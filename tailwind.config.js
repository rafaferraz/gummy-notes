module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      serif: ['Nunito', 'serif']
    },
    extend: {
      colors: {
        /*Dark Mode*/
        'gm-black': '#000000',
        'gm-dark-blue': '#150050',
        'gm-dark-purple': '#3F0071',
        'gm-purple': '#610094',
        'gm-light-purple': '#8B00D5',
        /*Light Mode*/
        'gm-button-green': '#66F8A0',
        'gm-text-button-purple': '#330086',
        'gm-lm-purple': '#510091',
        'gm-lm-grey': '#4E4E4E',
        'gm-darkest-pink': '#FF0081',
        'gm-dark-pink': '#FF48A5',
        'gm-pink': '#FF77BC',
        'gm-light-pink': '#FFAED7',
        'gm-lightest-pink': '#FFCAE5',
        /*Post-its*/
        'notes-purple': '#DBBEF9',
        'notes-dark-purple': '#D0AAF8',
        'notes-blue': '#AFDEFA',
        'notes-dark-blue': '#95CEF0',
        'notes-green': '#BDF6E3',
        'notes-dark-green': '#A3ECD4',
        'notes-yellow': '#FBF5C5',
        'notes-dark-yellow': '#F0E79E',
        'notes-orange': '#FFC3C1',
        'notes-dark-orange': '#FCB2B0'
      },
      boxShadow: {
        'gm-sm': '0 4px 6px 0px rgba(0, 0, 0, 0.5)'
      }
    }
  },
  plugins: []
};
