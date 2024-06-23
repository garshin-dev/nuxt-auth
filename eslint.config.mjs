import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss'
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginPrettier from "eslint-plugin-prettier"

export default withNuxt({
  ignores: ["**/.output/"],
  plugins: {
    prettier: eslintPluginPrettier,
    tailwindcss: eslintPluginTailwindcss,
  },
  rules: {
    ...eslintConfigPrettier.rules,
    ...eslintPluginTailwindcss.configs.recommended.rules,
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-multiple-template-root': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/enforces-negative-arbitrary-values': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  }
})
