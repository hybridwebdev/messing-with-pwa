let mode = process.env.NODE_ENV

let config = require('../vue-app-config.json')

const fs = require('fs')

process.env.BASE_URL = '/'

module.exports = {


  pwa: {
    name: 'Testy mc test test',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      start_url: "/",
      icons: [
          {
              "src": "/img/icons/android-chrome-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
          },
          {
              "src": "/img/icons/android-chrome-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
          },
          {
              "src": "/img/icons/android-chrome-maskable-192x192.png",
              "sizes": "192x192",
              "type": "image/png",
              "purpose": "maskable"
          },
          {
              "src": "/img/icons/android-chrome-maskable-512x512.png",
              "sizes": "512x512",
              "type": "image/png",
              "purpose": "maskable"
          }
      ],
    },
    workboxOptions: {
      swSrc: `src/service-worker/worker.js`,
    },
    workboxPluginMode: "InjectManifest",
  },
  lintOnSave: false,
  productionSourceMap: false,
  publicPath:
    mode === "development"
      ? config.localhost
      : "",
  outputDir: "../dist/",
  filenameHashing: true, 
  devServer: {
    port: config.port,
    host: "localhost",
    compress: true,
    disableHostCheck: true,   // That solved it 
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    http2: true,
    https: {
        key: fs.readFileSync('./certs/example.com+5-key.pem'),
        cert: fs.readFileSync('./certs/example.com+5.pem'),
    }
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: true
    },
  },
  configureWebpack: c => {
    /** 
      This ensures we can run multiple webpack instances without collision.
      Each config instance should have its own unique name
    */
    // c.output.jsonpFunction = config.webpack_chunk_name

    // /*
    //   Generating manifest.json file
    // */
    // c.plugins = c.plugins.concat( new manifesto() )
    
  },
  chainWebpack: config => {
    // config.plugins
    //   // .delete("html")
    //   // .delete("prefetch")
    //   // .delete("preload")
    return config
  }
}