import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        canal: {
          50: { value: '#e6f3f5' },
          100: { value: '#bfe0e6' },
          400: { value: '#3d8a9c' },
          500: { value: '#2b6777' },
          600: { value: '#1f4d59' },
          700: { value: '#163740' },
        },
        tulip: {
          300: { value: '#f8c1cd' },
          400: { value: '#f4a6b7' },
          500: { value: '#e8637d' },
          600: { value: '#c94861' },
        },
        hamster: {
          300: { value: '#e6c299' },
          400: { value: '#d9a066' },
          500: { value: '#b5793f' },
          600: { value: '#8a5a2c' },
        },
        paper: {
          50: { value: '#fdf6e9' },
          100: { value: '#f7ecd0' },
          200: { value: '#efe0b8' },
        },
      },
      fonts: {
        heading: { value: "'Georgia', 'Times New Roman', serif" },
        body: { value: "'Helvetica Neue', Arial, sans-serif" },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
