module.exports = {
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
            modules: "commonjs", // テスト環境ではCommonJSに変換
          },
        ],
        [
          "@babel/preset-typescript",
          {
            allowDeclareFields: true,
          },
        ],
      ],
      plugins: [
        [
          "babel-plugin-transform-import-meta",
          {
            module: "CommonJS",
          },
        ],
      ],
    },
  },
};
