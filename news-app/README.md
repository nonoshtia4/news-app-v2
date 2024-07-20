# news-app-v2

[Udemy「React Native 入門」](e1d5f9f3ba561486f374fb153bc64f4779f94f99)のサンプルコードです。

### Module

- Expo: v47
- React Navigation: v6
- Redux Tool Kit

### How to build

```
-- For android
eas build --platform android

-- For ios
eas build --platform ios
```

### How to upload to AppStore

- EAS でビルドする。
- 作成された ipa ファイルをダウンロードする
- AppStoreConnect で新規 App の作成
- AppStoreConnect で新規バージョンを作成
- mac に Transporter をインストール
- Transporter で AppStore Connct に ipa ファイルをアップロード
- AppStoreConnect で必要情報の入力
- AppStoreConnect で審査に提出

### バックエンドについて

- Firebase
