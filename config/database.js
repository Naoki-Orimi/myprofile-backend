module.exports = {
    development: {
      username: 'root',          // データベースのユーザー名
      password: '',              // データベースのパスワード
      database: 'myprofile',     // 使用するデータベース名
      host: 'localhost',         // データベースのホスト名
      dialect: 'mysql',          // 使用するデータベースの種類
      port: '3306'
    },
    production: {
      // 本番環境用の設定
    }
  };
  