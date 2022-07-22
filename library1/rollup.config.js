import jsx from 'rollup-plugin-jsx'

export default {
  external: ["lodash", "react"],
  input: ["./src/index.js"],
  output: [
    {
      dir: "dist",
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    jsx({ factory: 'React.createElement' })
  ]
};
