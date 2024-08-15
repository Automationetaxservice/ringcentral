const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const dotenv = require('dotenv');
const packageConfig = require('./package');

const buildPath = path.resolve(__dirname, 'src');

dotenv.config();

const apiConfig = {
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
  server: process.env.RINGCENTRAL_SERVER_URL,
  redirectUri: process.env.REDIRECT_URI,
};
const version = packageConfig.version;

const config = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    proxy: './src/proxy.js',
    redirect: './src/redirect.js',
  },
  devServer: {
    static: buildPath,
    hot: true,
    port: 3000,
  },
  devtool: 'eval-source-map',
  output: {
    path: buildPath,
    filename: '[name].js',
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      vm: require.resolve('vm-browserify'),
      timers: require.resolve('timers-browserify'),
      process: require.resolve('process/browser'),
      assert: require.resolve('assert'),
      buffer: require.resolve('buffer'),
      console: require.resolve('console-browserify'),
      constants: require.resolve('constants-browserify'),
      domain: require.resolve('domain-browser'),
      events: require.resolve('events'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      path: require.resolve('path-browserify'),
      punycode: require.resolve('punycode'),
      querystring: require.resolve('querystring-es3'),
      string_decoder: require.resolve('string_decoder'),
      sys: require.resolve('util'),
      tty: require.resolve('tty-browserify'),
      url: require.resolve('url'),
      util: require.resolve('util'),
      zlib: require.resolve('browserify-zlib'),
      fs: false,
      net: false,
      async_hooks: false,
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  externals: { 'express': { commonjs: 'express' } },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer'],
      setImmediate: ['setimmediate', 'setImmedate'],
      clearImmediate: ['setimmediate', 'clearImmedate'],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        API_CONFIG: JSON.stringify(apiConfig),
        APP_VERSION: JSON.stringify(version),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg/,
        exclude: /font|src(\/|\\)assets(\/|\\)images/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
              svgo: {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.woff|\.woff2|.eot|\.ttf/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 15000,
            name: 'fonts/[name]_[hash].[ext]',
            // TODO: it should be upgrade css-loader and update config
            esModule: false,
          },
        },
      },
      {
        test: /\.png|\.jpg|\.gif|\.svg/,
        exclude:
          /@ringcentral-integration(\/|\\)widgets(\/|\\)assets(\/|\\)images(\/|\\).+\.svg/,
        use: 'url-loader?limit=20000&publicPath=./&name=images/[name]_[hash].[ext]',
      },
      {
        test: /\.sass|\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[folder]_[local]',
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer];
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              includePaths: ['src', 'node_modules'],
            },
          },
        ],
      },
      {
        test: /\.ogg$/,
        use: 'file-loader?publicPath=./&name=audio/[name]_[hash].[ext]',
      },
    ],
  },
};

module.exports = config;
