module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      serif: ['Nunito', 'serif']
    },
    extend: {
      colors: {
        'gm-black': '#000000',
        'gm-dark-blue': '#150050',
        'gm-dark-purple': '#3F0071',
        'gm-purple': '#610094',
        'gm-light-purple': '#8B00D5'
      }
    }
  },
  plugins: []
};
