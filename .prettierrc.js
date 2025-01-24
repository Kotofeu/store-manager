module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 120,
  trailingComma: 'none',
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.json',
      options: {
        tabWidth: 2
      }
    }
  ]
};