import { nodeResolve } from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";

const isProduction = process.env.NODE_ENV === "production";
export default {
  input: "src/main.ts",
  output: {
    file: "dist/bundle.js",
    format: "cjs", // Node.jsでrequire可能なCommonJS形式
    exports: "default", // export defaultをmodule.exportsに変換する
  },
  plugins: [
    nodeResolve(), // node_modulesのパッケージを解決
    esbuild({
      sourceMap: true,
      minify: isProduction,
    }),
  ],
};
