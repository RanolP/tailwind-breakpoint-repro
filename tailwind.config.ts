import { TailwindConfig } from 'tw-to-css';

export default {
  theme: {
    screens: {
      sm: { min: '640px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      xl: { min: '1280px' },
      '2xl': { min: '1536px' },
    },
  },
} satisfies TailwindConfig;
