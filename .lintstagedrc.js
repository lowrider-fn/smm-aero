module.exports = {
  "*.{ts,tsx,js}": [
    'yarn lint'
  ],
  "*.{css,scss,sass}": [
    'yarn stylelint'
  ],
  "styled.ts": [
    'yarn stylelint'
  ]
}