
const getBabelConfig = (api)=> {
  if (api) {
    api.cache(true);
  }
  const presets = [
    '@babel/preset-env'
  ];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-flow-strip-types',
    [
      '@babel/plugin-transform-runtime', {
        helpers: true,
        regenerator: true
      },
    ]
  ];
  return {
    presets,
    plugins
  };
};

module.exports = getBabelConfig;
