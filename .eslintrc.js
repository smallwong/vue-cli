module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint', // 前端是 ES6, Jsx… 等等需要 Babel 轉型的 JavaScript
        sourceType: 'module', // 設置ECMAScript 模塊
        ecmaVersion: 6 // 啟用 ES6 語法支持
    },
    env: {
        // 要在哪些環境執行
        browser: true,
        node: true,
        es6: true
    },
    // 使用推薦的 ESLint 設定
    extends: ['standard', 'plugin:vue/base'], // 使用standard規範

    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
        //  extends 或是 plugins 有你不想要的規則，可在此覆蓋
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 不準用console
        'no-undef': 'off', // 宣告修正
        'no-unused-vars': 'off', // 禁止未使用的變數
        'no-redeclare': 'off', // 禁止重複定義變數
        // 'no-empty': 'off',
        indent: ['warn', 4], // 縮排設定
        'vue/max-attributes-per-line': 'off',
        'vue/order-in-components': 'off',
        'vue/html-end-tags': 'off'
    }
};
