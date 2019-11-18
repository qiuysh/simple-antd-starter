module.exports = {
  parser:  '@typescript-eslint/parser',
  extends: [
  'plugin:react/recommended',  
  'plugin:@typescript-eslint/recommended'
  ],                              //使用推荐的React代码检测规范
  plugins: ['@typescript-eslint'],
  env:{                         
    browser: true,
    node: true,
  },
  parserOptions: {        //指定ESLint可以解析JSX语法
    "ecmaVersion": 2019,
    "sourceType": 'module',
    "ecmaFeatures":{
      jsx:true
    }
  },
  rules: {
  
  }
};