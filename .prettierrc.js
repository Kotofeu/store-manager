module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 120,
  trailingComma: 'none',
  jsxSingleQuote: true,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'crlf',
  overrides: [
    {
      files: '*.json',
      options: {
        tabWidth: 2
      }
    }
  ]
};
