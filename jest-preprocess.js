const babelOptions = {
    presets: ["babel-preset-gatsby", "@babel/preset-flow"],
  }
  module.exports = require("babel-jest").default.createTransformer(babelOptions)