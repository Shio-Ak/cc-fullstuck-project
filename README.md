# cc-fullstuck-project

## セットアップ手順

```
# リポジトリをクローン
git clone https://github.com/Shio-Ak/cc-fullstuck-project.git

# バックエンドディレクトリに移動し、必要モジュールをインストール
cd ./backend
npm i

# .env.localファイルを作成し、以下を追記
vi .env.local

DB_USER=<DB_NAME>
DB_PASSWORD=<DB_PASSWORD>
DB_NAME=dormitory_food_management_db
PORT=3000

# DB作成
<postgresql環境へログイン>
CREATE DATABASE dormitory_food_management_db;
<ログアウト>

# DBのマイグレーションを実施
npm run migrate
npm run seed

# expressサーバを起動
npm run dev

# フロントエンドディレクトリに移動し、必要モジュールをインストール
cd ../frontend
npm i

# viteを起動
npm run dev

# ブラウザで以下のアドレスを入力しweb画面へ接続
http://http://localhost:5173/

```

## 動作保証環境

```
node v20.16.0
npm v10.8.1
postgresql v17
```

## 概要

### 背景

- 今住んでいる寮でご飯の食べる/食べないが紙の台帳ベースの管理となっている。
  - 台帳は寮の食堂にしか置かれていないので、寮生はわざわざ食堂に出向き台帳に記載/確認する必要がある。
- 台帳をサーバ上で管理し、web アプリケーションを使ってインターネット経由でどこからでもアクセス・変更できるようにしたい。

### 要件

- web アプリケーション経由で台帳にアクセス・変更ができること。
  - 台帳の内容を確認できること。
  - 台帳の内容を変更できること。

### 実現方式

- web 画面上に以下の要素を設ける。
  - ユーザの名前と食べる/食べないのステータスを更新する日付を入力するフォーム。
  - 食べる/食べないのステータスを更新するボタン。
  - 台帳 DB の内容を表示するステータス一覧。

### フロント画面概要

![front_overview](images/front_overview.drawio.png)

## 将来の計画

- スタイルシートを適用
- ユーザ登録フォームの整備
- 選択可能なカレンダーの日付を増強
- 朝食・夕食それぞれで食べる/食べないの選択が可能なように処理を改修
- 管理者向けに食べた日数に応じて課金額が自動計算されるように処理を改修
