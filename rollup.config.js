import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

const config = [{
  input: 'src/launcher.ts',
  output: [{
    name: 'getid-launcher.js',
    file: `${__dirname}/lib/bundle.js`,
    format: 'umd',
    compact: true,
  }],
  plugins: [
    typescript({declaration: true}),
    babel({
      babelHelpers: 'runtime',
      skipPreflightCheck: true,
      exclude: 'node_modules/**',
      presets: ['@babel/env'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    terser(),
  ],
},
{
  input: "./src/index.d.ts",
  output: [{ file: "lib/bundle.d.ts", format: "es" }],
  plugins: [dts()],
},]

export default config;
