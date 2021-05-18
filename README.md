# エクステンション - 投票機能 - 

投票機能のディレクトリです。

## SKILLS
### フロントエンド
 - React.js /  React-Router / material-ui / Create React App
### サーバー
 - axios

## 設計
reactの機能【`Provider`, `Context`, `Reducer`】を主軸としています。

```js
<App> // シーンのデザイン設計などを行っています。
 <AppProvider> // 全体のデータの管理をおこなっています。変更はdispatchをたたきます。
    <XXArea>  // 内包している子どもたちです。AppProviderに入っているstateとdispatchの参照ができます
    <XXArea>
    <XXArea>
  </AppProvider>
</App>
```

### ディレクトリ
- actions 
  - dispatchにつながる関数を定義しています。
- common
  - 共通系のコードを置いています
- components
  - 見た目のパーツを置いています(XXXAreaごとに別れている)
- constants
  - 定数を定義しています



## 主なライブラリ
- [material-ui](https://material-ui.com/)
  - cssのデザインの基礎を作ってくれています。

- [react-measure](https://github.com/souporserious/react-measure)
  - 画面のサイズを取ってくれます。

- [React Router](https://reactrouter.com/)
  - SPAでのルート管理といえばの定番ライブラリです。


## htmlの書き出し方法
`export`ディレクトリに完成htmlをつっこんでいます。
`npm run build`実行でディレクトリと各種ファイルを作成します。
