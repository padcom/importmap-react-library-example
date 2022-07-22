import externals from 'rollup-plugin-peer-deps-external'
import jsx from 'rollup-plugin-jsx'

export default {
  input: [
    './src/index.js',
  ],
  output: [ {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
  } ],
  plugins: [
    externals(),
    jsx({ factory: 'React.createElement' }),
  ]
};
