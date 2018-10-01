# Vue.js 入門

- [Vue.js入門 基礎から実践アプリケーション開発まで](https://gihyo.jp/book/2018/978-4-297-10091-9)
- [サポートページ](https://gihyo.jp/book/2018/978-4-297-10091-9/support)

## karma + mocha

依存関係のインストール

```shell
$ npm install karma mocha --save-dev
```

プロジェクトの作成

```shell
$ karma init
Which testing framework do you want to use ?
Press tab to list possible options. Enter to move to the next question.
> mocha

Do you want to use Require.js ?
This will add Require.js plugin.
Press tab to list possible options. Enter to move to the next question.
> no

Do you want to capture any browsers automatically ?
Press tab to list possible options. Enter empty string to move to the next question.
> Chrome
```

karma の起動

```shell
$ karma start
```