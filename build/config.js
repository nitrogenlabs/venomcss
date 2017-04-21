import path from 'path';
import appPackage from '../package.json';

let config = {
  version: appPackage.version,
  env: process.env.NODE_ENV || 'development',
  port: {
    development: 5000
  },

  filenames: {
    entry: 'app.js',
    index: 'index.html',
    icons: 'icons.svg',
    scss: 'core.scss'
  },

  directories: {
    src: 'src',
    dist: 'dist',
    development: 'dist/dev',
    test: 'test'
  }
};

// Utilities
const basePath = path.resolve(__dirname, '../');
config.absolute = (...args) => [basePath, ...args].join('/');
config.relative = (...args) => ['.', ...args].join('/');

config.path = {
  src: {
    scss: {
      main: config.relative(config.directories.src, 'styles/', config.filenames.scss),
      files: [
        config.relative(config.directories.src, 'styles/**/*.scss')
      ],
      includes: []
    }
  },

  dist: {
    css: config.relative(config.directories[config.env], 'css/')
  },

  tmp: 'tmp',
};

// SCSS
config.scss = {
  dev: {
    errLogToConsole: true,
    outputStyle: 'expanded',
    includePaths: []
  },
  dist: {
    errLogToConsole: true,
    outputStyle: 'compressed',
    includePaths: []
  }
};

// Autoprefixer
config.autoprefixer = [
  'last 5 Chrome versions',
  'last 5 Firefox versions',
  'last 2 Safari versions',
  'Explorer >= 10'
];

export default config;
