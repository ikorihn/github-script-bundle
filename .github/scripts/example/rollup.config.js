import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";

const isProduction = process.env.NODE_ENV === "production";
export default {
  input: "src/main.ts", // 入力ファイル
  output: {
    file: "dist/bundle.js", // 出力ファイル
    format: "cjs", // Node.jsでrequire可能なCommonJS形式
    exports: "default", // export defaultをmodule.exportsに変換する
  },
  plugins: [
    nodeResolve(), // node_modulesのパッケージを解決
    commonjs(), // CommonJSモジュールをESMに変換
    esbuild({
      sourceMap: true,
      minify: isProduction,
    }),
  ],
};
