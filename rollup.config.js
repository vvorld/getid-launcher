import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

const defaultEnvVariables = {
  'process.env.FALLBACK_SDK_VERSION': JSON.stringify(''),
  'process.env.SCRIPT_NAME_SUFFIX': JSON.stringify(''),
};

const config = [
  {
    input: 'src/launcher.ts',
    output: [{
      name: 'getid-launcher.js',
      file: `${__dirname}/lib/bundle.js`,
      format: 'umd',
      compact: true,
      sourcemap: false,
    }],
    plugins: [
      typescript({ declaration: true }),
      replace(defaultEnvVariables),
      babel({
        babelHelpers: 'runtime',
        skipPreflightCheck: true,
        exclude: 'node_modules/**',
        presets: ['@babel/env'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      json(),
      terser(),
    ],
  },
  {
    input: './src/index.d.ts',
    output: [{ file: `${__dirname}/lib/bundle.d.ts`, format: 'es' }],
    plugins: [
      typescript({ declaration: true }),
      dts()
    ],
    sourcemap: false
  },
  {
    input: 'src/lib.ts',
    output: [{
      name: 'getidWebSdk',
      esModule: false,
      exports: 'named',
      file: `${__dirname}/lib/getid-web-sdk-launcher-v7.min.js`,
      format: 'umd',
      compact: true,
      sourcemap: false,
    }],
    plugins: [
      typescript({ declaration: true }),
      replace(defaultEnvVariables),
      babel({
        babelHelpers: 'runtime',
        skipPreflightCheck: true,
        exclude: 'node_modules/**',
        presets: ['@babel/env'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      json(),
      terser(),
    ],
  },
  {
    input: 'src/lib.ts',
    output: [{
      name: 'getidWebSdk',
      esModule: false,
      exports: 'named',
      file: `${__dirname}/lib/getid-web-sdk-launcher-non-polyfills.min.js`,
      format: 'umd',
      compact: true,
      sourcemap: false,
    }],
    plugins: [
      typescript({ declaration: true }),
      replace({
        ...defaultEnvVariables,
        'process.env.FALLBACK_SDK_VERSION': JSON.stringify('v6.13.1-rc'),
        'process.env.SCRIPT_NAME_SUFFIX': JSON.stringify('-non-polyfills'),
      }),
      babel({
        babelHelpers: 'runtime',
        skipPreflightCheck: true,
        exclude: 'node_modules/**',
        presets: ['@babel/env'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      json(),
      terser(),
    ],
  },
];

export default config;
