import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  darkMode: 'selector',
  content: ['./src/*/**/*.{js,ts,jsx,tsx,mdx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        lightCol: '#fafafa',
        darkCol: '#1a1c1f',
        danger: '#dc3545',
        grayName: ' #adb5bd',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
