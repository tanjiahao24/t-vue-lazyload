import { terser } from 'rollup-plugin-terser'


export default {
  input: './src/index.js',
  output: [
    {
      format: 'cjs',
      file: 'lib/mini-vue.cjs.js'
    },
    {
      format: 'es',
      file: 'lib/mini-vue.esm.js'
    }
  ],

  plugins: [
    terser()
  ]
}