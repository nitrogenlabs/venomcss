import path from 'path';
import appPackage from '../package.json';

let config = {
  version: appPackage.version,
  env: process.env.NODE_ENV || 'development',
  port: {
    development: 5000
  },

  filenames: {
    min: 'venom-min.css',
    scss: 'venom.scss'
  },

  directories: {
    src: 'src',
    dist: 'dist'
  },
  license: `/*!
  venom.css v${appPackage.version} | MIT License | ${appPackage.repository.url}
  normalize.css v${(appPackage.devDependencies['normalize.css']).replace('^', '')} | MIT License | github.com/necolas/normalize.css
  */`
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
    },
    normalize: config.relative('node_modules/normalize.css/normalize.css')
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
  'Explorer >= 11'
];

export default config;
