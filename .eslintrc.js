module.exports = {
  parser:  '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],                              //使用推荐的React代码检测规范
  plugins: ['@typescript-eslint', 'react-hooks'],
  env:{    
    es6: true,                     
    browser: true,
    node: true,
  },
  settings: {             //自动发现React的版本，从而进行规范react代码
    "react": {
        "pragma": "React",
        "version": "detect"
    }
  },
  parserOptions: {        //指定ESLint可以解析JSX语法
    "ecmaVersion": 2019,
    "sourceType": 'module',
    "ecmaFeatures":{
      jsx:true
    }
  },
  rules: {
    "@typescript-eslint/camelcase": ['off', {properties: 'always'}],
    "@typescript-eslint/explicit-function-return-type": [
      'off', 
      {
        allowExpressions: true, 
        allowTypedFunctionExpressions: true,
      }
    ],
    "no-import-assign": "warn"
  }
};