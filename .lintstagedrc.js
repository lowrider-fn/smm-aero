module.exports = {
  "*.{ts,tsx,js}": [
    'yarn lint'
  ],
  "src/**/{styled.ts,*.css}": [
    'yarn stylelint'
  ]
}