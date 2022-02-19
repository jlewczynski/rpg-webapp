// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
const proxy = require('http2-proxy');

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
  routes: [
    {
      src: '/api/.*',
      dest: (req, res) => 
        proxy.web(req, res, {
          hostname: 'localhost',
          port: 8888,
        })
    },
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
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
