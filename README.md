# Expo SDK 53 with React Native Maps 🗺️

このプロジェクトは [Expo](https://expo.dev) を使用して作成された、地図機能を含むモバイルアプリケーションです。

## 機能

- **フルスクリーン地図表示**: アプリ起動時に地図がフルスクリーンで表示されます
- **タブナビゲーション**: 地図、ホーム、探索の3つのタブを持つナビゲーション
- **プラットフォーム最適化**: iOS では Apple Maps、Android では Google Maps のズームコントロールを使用
- **位置情報サポート**: ユーザーの現在位置を表示し、追跡する機能

## 始め方

1. 依存関係をインストール

   ```bash
   npm install
   ```

2. アプリを起動

   ```bash
   npx expo start
   ```

出力には、以下の方法でアプリを開くオプションが表示されます：

- [開発ビルド](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android エミュレータ](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS シミュレータ](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)（Expo でのアプリ開発を試すための限定的なサンドボックス）

**app** ディレクトリ内のファイルを編集して開発を始めることができます。このプロジェクトは [ファイルベースのルーティング](https://docs.expo.dev/router/introduction) を使用しています。

## 使用している主要パッケージ

- **react-native-maps**: 地図表示のための主要コンポーネント
- **expo-router**: タブナビゲーションとルーティング
- **expo-location**: 位置情報の取得と管理（将来的な実装のため）

## プロジェクト構造

- **/app/(tabs)/index.tsx**: メインの地図画面
- **/app/(tabs)/home.tsx**: ホーム画面
- **/app/(tabs)/explore.tsx**: 探索画面
- **/components/MapComponent.tsx**: 地図コンポーネント

## 詳細情報

Expo や React Native Maps についての詳細は、以下のリソースを参照してください：

- [Expo ドキュメント](https://docs.expo.dev/)
- [React Native Maps ドキュメント](https://github.com/react-native-maps/react-native-maps)
- [Expo Router ドキュメント](https://docs.expo.dev/router/introduction)

## コミュニティに参加

ユニバーサルアプリを作成する開発者コミュニティに参加しましょう。

- [GitHub の Expo](https://github.com/expo/expo)
- [Discord コミュニティ](https://chat.expo.dev)
