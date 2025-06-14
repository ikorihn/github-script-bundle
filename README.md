# GitHub Script Bundle

このリポジトリは、GitHub Actionsで`actions/github-script`とTypeScript、rollupを使用してジョブを書く方法を例示するためのサンプルプロジェクトです。

## 概要

GitHub Actionsのワークフローで複雑なスクリプトを実行する際、JavaScriptやTypeScriptで書いたスクリプトを効率的にバンドルして実行する方法を提供します。

### 使用技術

- **actions/github-script**: GitHub APIを簡単に呼び出せるGitHub Action
- **TypeScript**: 型安全なスクリプト開発
- **Rollup**: モジュールバンドラー（依存関係を含めた単一ファイルの生成）

## 特徴

- TypeScriptで型安全にGitHub APIを操作
- rollupによる依存関係の解決とバンドル
- GitHub Actionsでの実行に最適化されたファイル構成

## ディレクトリ構造

```
.
├── src/
│   ├── scripts/          # TypeScriptスクリプト
│   └── types/           # 型定義ファイル
├── dist/                # バンドル後のファイル
├── .github/
│   └── workflows/       # GitHub Actionsワークフロー
├── rollup.config.js     # Rollup設定
├── package.json
└── tsconfig.json        # TypeScript設定
```

## セットアップ

1. 依存関係のインストール:
   ```bash
   npm install
   ```

2. TypeScriptスクリプトのビルド:
   ```bash
   npm run build
   ```

3. GitHub Actionsでの実行:
   - `.github/workflows/`内のワークフローファイルを参照

## 使用例

GitHub Actionsワークフロー内で以下のように使用します：

```yaml
- name: Run GitHub Script
  uses: actions/github-script@v7
  with:
    script: |
      const script = require('./dist/your-script.js');
      await script({ github, context, core });
```

## 開発

新しいスクリプトを追加する際は：

1. `src/scripts/`にTypeScriptファイルを作成
2. `npm run build`でバンドル
3. GitHub Actionsワークフローで呼び出し

## ライセンス

MIT