import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/components/index.ts",
  output: {
    sourcemap: true,
    dir: "src/",
    format: "iife",
  },
  plugins: [typescript({ module: "ESNext", sourceMap: true })],
};
