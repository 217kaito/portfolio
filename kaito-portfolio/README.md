# Kaito Portfolio

Next.js + TypeScript + Tailwind CSS で構築したポートフォリオサイト。

## 特徴

- 日本語 / 英語切り替え（ヘッダー右上のトグル、選択は localStorage に保存）
- 固定ナビゲーション + セクションジャンプ
- スクロール連動のリビール演出・パララックス・アニメーション背景
- 経歴のタイムライン表示、スキルのカテゴリ別カード、Projects カード
- お問い合わせフォーム（静的サイトのため mailto でメールソフトを起動）
- GitHub Pages への自動デプロイ（GitHub Actions）

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## ビルド（静的エクスポート）

```bash
npm run build
```

`out/` に静的ファイルが生成されます。

## GitHub Pages へのデプロイ

1. GitHub にリポジトリを作成して push
2. リポジトリの Settings → Pages → Source を **GitHub Actions** に設定
3. main ブランチに push すると `.github/workflows/deploy.yml` が自動でビルド・デプロイ

`https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます。

- `<ユーザー名>.github.io` という名前のリポジトリ（ルート公開）やカスタムドメインを使う場合は、
  `deploy.yml` の `NEXT_PUBLIC_BASE_PATH` の行を削除してください。

## お問い合わせフォームについて

GitHub Pages は静的ホスティングのためバックエンドがなく、フォームは mailto リンクとして動作します。
本格的なフォーム送信にしたい場合は [Formspree](https://formspree.io/) などの外部サービスの
エンドポイントに POST するよう `components/Contact.tsx` を変更してください。
