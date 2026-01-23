module.exports = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  trailingComma: 'es5',
  bracketSameLine: false,

  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
