import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

const defaultEnvVariables = {
  'process.env.FALLBACK_SDK_VERSION': JSON.stringify(''),
  'process.env.VERSION_SUFFIX': JSON.stringify(''),
  'process.env.SCRIPT_NAME_SUFFIX': JSON.stringify(''),
};

const launchers = [
  {
    name: 'v7',
    env: {},
  },
  {
    name: 'non-polyfills',
    env: {
      'process.env.FALLBACK_SDK_VERSION': JSON.stringify('v6.13.1-rc'),
      'process.env.SCRIPT_NAME_SUFFIX': JSON.stringify('-non-polyfills'),
    },
  },
  {
    name: 'kl',
    env: {
      'process.env.FALLBACK_SDK_VERSION': JSON.stringify('v7'),
      'process.env.VERSION_SUFFIX': JSON.stringify('-kl'),
    },
  },
  {
    name: 'kl-non-polyfills',
    env: {
      'process.env.FALLBACK_SDK_VERSION': JSON.stringify('v7'),
      'process.env.VERSION_SUFFIX': JSON.stringify('-kl'),
      'process.env.SCRIPT_NAME_SUFFIX': JSON.stringify('-non-polyfills'),
    },
  },
];

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
  ...launchers.map((launcher) => ({
    input: 'src/lib.ts',
    output: [{
      name: 'getidWebSdk',
      esModule: false,
      exports: 'named',
      file: `${__dirname}/lib/getid-web-sdk-launcher-${launcher.name}.min.js`,
      format: 'umd',
      compact: true,
      sourcemap: false,
    }],
    plugins: [
      typescript({ declaration: true }),
      replace({
        ...defaultEnvVariables,
        ...(launcher.env || {})
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
  })),
];

export default config;
