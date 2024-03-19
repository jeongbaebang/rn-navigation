module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['transform-inline-environment-variables'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
}
