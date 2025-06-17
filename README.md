# GitHub Script Bundle

このリポジトリは、GitHub Actionsで`actions/github-script`とTypeScript、rollupを使用してジョブを書く方法を例示するためのサンプルプロジェクトです。

## 概要

GitHub Actionsのワークフローで複雑なスクリプトを実行する際、TypeScriptでライブラリを含めて書いてバンドルして実行する方法を提供します。

### 使用技術

- actions/github-script
- TypeScript
- Rollup

## ディレクトリ構造

```
.
└── .github/
    ├── scripts/
    │   └── example/     # github-scriptで使うスクリプト
    └── workflows/       # GitHub Actionsワークフロー
```
