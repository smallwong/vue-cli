# vue-cli3 wong's 腳手架

> 一套架構，開發即上手

### 文件編譯時間: 2019/05/31

## Project start

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for User acceptance testing

```
npm run build-uat
```

### Compiles and minifies for production

```
npm run build-prod
```

### Lints and fixes files

```
npm run lint
```

# 專案結構

```
vue-cli
├── public
├── src
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── package-lock.json
├── package.json
├── README.md
└── vue.config.js
```

## src 介紹

```
src
├── assets
├── components
├── service
│ ├── ajax.js
│ └── xxxApi.js
├── styles
│ ├── _mixins.scss
│ ├── _variables.scss
│ └── main.scss
├── views
├── App.vue
├── main.js
├── router.js
└── store.js
```

### components

> 提供給`views/xxx.vue`所建立的各組件存放處

### service

> 透過 ajax.js 檔來呼叫 API 來做到集中管理的目的，後端有開 API 就在此資料夾內新增 xxxApi.js 檔來管理，同一種類型的 API 就可以合併到同一支好方便管理

-   ajax.js

    運用 axios 進行二次封裝，透過此 js 檔去整合所有呼叫 API 的方式和訊息集中管理

    -   http

        整合呼叫 API 的 共同參數

    -   http.interceptors.response

        整合所有 API 呼叫時的錯誤訊息

    -   getRequest

        使用 get 的方式呼叫 API

    -   postRequest

        使用 post 的方式呼叫 API

    -   patchRequest

        使用 patch 的方式呼叫 API(更新資料)

    -   AjaxFunction

        最終呼叫 API 的方法

-   xxxApi.js

    藉由引入 ajax.js 指定呼叫 API 的方式，來建立該 API 系列 的呼叫方法，因而達到相關 API 的集中管理和維護

### styles

> 集中管理 scss 檔的資料夾

-   main.scss

    匯集各 scss 檔，且一併輸出給各 `.vue` 檔

-   \_variables.scss

    定義各種變數的 scss 檔

-   \_mixins.scss

    定義 RWD 的 scss 檔

### views

> 組合`components/xxx.vue`，並搭配`router.js`輸出成頁面

### config.js

> 設定環境變數

## vue.config.js 介紹

> 覆蓋 vue 的 webpack 預設設定

-   css.loaderOptions.sass

    統一輸出 main.scss 檔

-   devServer.proxy

    針對 local 端跨網域問題，以`/api`當作域名來源

-   devServer.overlay

    針對 eslint 錯誤顯示設定

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
