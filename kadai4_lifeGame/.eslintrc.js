module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
