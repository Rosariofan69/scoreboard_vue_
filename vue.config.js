module.exports = {
  configureWebpack() {
    return {
      devtool: 'source-map',
    }
  },
  devServer: {
    port: 8000,
    // localhostでvueからexpressにAPIリクエストを送信する為の設定
    proxy: 'http://localhost:3000'
  },
}