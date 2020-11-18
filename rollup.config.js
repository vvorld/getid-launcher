import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

const config = {
  input: 'src/launcher.js',
  output: [{
    name: 'getid-launcher.js',
    file: `${__dirname}/lib/bundle.js`,
    format: 'umd',
    compact: true,
  }],
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      presets: ['@babel/env'],
      plugins: [],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    uglify(),
  ],
};

export default config;
