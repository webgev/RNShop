module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          utils: './src/utils',
          constants: './src/constants',
          screens: './src/screens',
          navigation: './src/navigation',
          models: './src/models',
          styles: './src/styles',
        },
      },
    ],
  ],
};
