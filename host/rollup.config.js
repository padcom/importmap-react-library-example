export default {
  external: [
    'lodash',
    'react', 'react-dom', 'react-dom/client',
    'library1'
  ],
  input: [
    'main.js'
  ],
  output: [{
    dir: 'public',
    format: 'esm',
    sourcemap: true
  }]
};
