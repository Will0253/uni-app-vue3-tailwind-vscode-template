// const { defaultPreset } = require('tailwindcss-miniprogram-preset')

// 基础配置，无需任何preset
// https://github.com/sonofmagic/weapp-tailwindcss-webpack-plugin/blob/main/demo/uni-app/tailwind.config.js
/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx,wxml}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false
  }
}