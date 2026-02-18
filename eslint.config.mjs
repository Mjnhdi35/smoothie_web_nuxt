// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  [
    {
      ignores: ['eslint.config.*', '.nuxt', 'dist'],
      rules: {
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/comma-dangle': ['error', 'never'],
        '@stylistic/semi': ['error', 'never']
      }
    }
  ]
)
