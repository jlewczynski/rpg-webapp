// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    'src/ui': '/js',
    'src/shared': '/js/shared',
    public: { url: '/', static: true, resolve: false }
  },
  alias: {
    ui: './src/ui',
    shared: './src/shared'
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: 'build/ui'
  },
};
