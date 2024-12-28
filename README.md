要使用 Hugo 建立一個乾淨的 Alpine.js + TailwindCSS 初始專案，你可以按照以下步驟操作。Hugo 是一個靜態網站生成器， Tailwind CSS 的 UI 元件庫。首先，你需要設置 Hugo 和 Tailwind CSS，源集成到你的專案中。

### 步驟 1：安裝 Hugo

如果你還沒有安裝 Hugo，請根據你的作業系統安裝它。

- [Hugo 官方安裝說明](https://gohugo.io/getting-started/installing/)

### 步驟 2：建立 Hugo 專案

```bash
hugo new site hugo-alpine-tailwind-starter
```

進入新建立的專案資料夾：

```bash
cd hugo-alpine-tailwind-starter
```

此指令建立了資料夾結構，及 hugo.toml 配置檔如下：

![hugo-1-empty-project](https://hackmd.io/_uploads/HygmfR1W0R.png)

其中有一個 hugo.toml ，改名稱為 hugo.yml，內容如下：

```yaml
languageCode: zh-TW
title: Hugo template starter
baseURL: http://localhost:1313
enableInlineShortcodes: true
canonifyURLs: true
params:
  homepage: https://hugo-starter.com
  authors: jungyuyu@gmail.com
  social_image_path: /images/og-image.jpg
markup:
  goldmark:
    renderer:
      unsafe: true
  highlight:
    noClasses: false
    style: colorful
  tableOfContents:
    startLevel: 2
    endLevel: 6
buildDrafts: true
buildFuture: true
enableRobotsTXT: true
metaDataFormat: yaml
disableKinds:
  - '404'
  - taxonomy
  - taxonomyTerm
  - RSS
publishDir: _gh_pages

```

#### gh-pages 介紹
gh-pages 完整名稱是 GitHub Pages，基本上這是一個由 GitHub（程式碼托管平台）所提供的服務，可以讓你不用花錢也可以部署一個靜態網頁，你可以拿來放自己的部落格、作品集或是一些臨時展示用的網頁。

### 步驟 3：初始化 Git 和 npm

接下來，初始化 npm (或 yarn)，以便設置前端依賴。

```bash
npm init -y
```

此時在根目錄多了 package.json 檔案，步驟4將會自動配置編輯此檔案。

### 步驟 4：安裝 Tailwind CSS 和相關套件

以下會創建 node_modules 資料夾，相應套件皆在其內。

安裝 Tailwind CSS 及相應套件，以下是開發模式時會依賴的套件(devDependencies)：

```bash
npm install -D \
  @tailwindcss/aspect-ratio \
  @tailwindcss/typography \
  alpinejs \
  autoprefixer \
  css-loader \
  css-minimizer-webpack-plugin \
  file-loader \
  mini-css-extract-plugin \
  npm-run-all \
  postcss \
  postcss-cli \
  postcss-loader \
  postcss-preset-env \
  source-map-loader \
  style-loader \
  tailwindcss \
  webpack \
  webpack-cli \
  webpack-dev-server \
  yarn
```

以下是正式佈置時仍須依賴的套件(dependencies)，安裝指令如下：

```bash
npm install --only=prod \
@alpinejs/intersect \
@alpinejs/persist \
@fullcalendar/core \
@fullcalendar/daygrid \
@fullcalendar/interaction \
@popperjs/core \
apexcharts \
prismjs \
sortablejs \
svgmap
```

以上指令將會修改 package.json ，部份內容如下：
```bash
{
 ...
 "devDependencies": {
    "@tailwindcss/aspect-ratio": "^0.4.2",
    ...
 },
  "dependencies": {
    "@alpinejs/intersect": "^3.14.1",
  ...
 }
}

```

package.json 完整內容如下：

```json
{
  "name": "hugo-alpine-tailwind-starter",
  "description": "",
  "keywords": [],
  "version": "1.0.0",
  "author": "Aaron Yu <jungyuyu@gmail.com>",
  "license": "MIT",
  "style": "dist/css/app.css",
  "main": "static/js/app.bundle.js",
  "scripts": {
    "start": "run-p start:dev:*",
    "start:dev:hugo": "hugo server -D --watch",
    "start:dev:webpack": "webpack --mode=development --watch",
    "build": "NODE_ENV=production && run-s build:webpack build:hugo",
    "build:hugo": "hugo --destination=./.build",
    "build:webpack": "webpack --mode=production",
    "build:styles": "npx tailwindcss -i ./assets/css/app.css -o ./dist/css/app.css"
  },
  "devDependencies": {
    "@tailwindcss/aspect-ratio": "^0.4.2",
    "@tailwindcss/typography": "^0.5.15",
    "alpinejs": "^3.14.1",
    "autoprefixer": "^10.4.20",
    "css-loader": "^7.1.2",
    "css-minimizer-webpack-plugin": "^7.0.0",
    "file-loader": "^6.2.0",
    "mini-css-extract-plugin": "^2.9.1",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.4.47",
    "postcss-cli": "^11.0.0",
    "postcss-loader": "^8.1.1",
    "postcss-preset-env": "^10.0.5",
    "source-map-loader": "^5.0.0",
    "style-loader": "^4.0.0",
    "tailwindcss": "^3.4.13",
    "webpack": "^5.94.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.1.0",
    "yarn": "^1.22.22"
  },
  "dependencies": {
    "@alpinejs/intersect": "^3.14.1",
    "@alpinejs/persist": "^3.14.1",
    "@fullcalendar/core": "^6.1.15",
    "@fullcalendar/daygrid": "^6.1.15",
    "@fullcalendar/interaction": "^6.1.15",
    "@popperjs/core": "^2.11.8",
    "apexcharts": "^3.53.0",
    "prismjs": "^1.29.0",
    "sortablejs": "^1.15.3",
    "svgmap": "^2.11.1"
  }
}
```



### 步驟 5：設定 Tailwind CSS

在專案根目錄下建立一個 `tailwind.config.js` 檔案：

```bash
npx tailwindcss init
```

這會生成一個基礎的 `tailwind.config.js` 檔案。

```js
/** @type {import('tailwindcss').Config} */

const typography = require("@tailwindcss/typography");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./content/**/*.{html,js,md}",
    "./layouts/**/*.{html,md}",
    "./assets/js/**.js",
    "./data/**/*.json"
  ],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg',
    'bg-opacity-50',
    'dark:bg-opacity-80'
  ],
  darkMode: "class",
  important: true,

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: colors.yellow,
        neutral: colors.gray,
        brown: {
          50: "#fdf8f3",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
        blue: {
          50: "#ebf5fe",
          100: "#d0e2ff",
          200: "#a6c8ff",
          300: "#78a9ff",
          400: "#4589ff",
          500: "#0f62fe",
          600: "#0043ce",
          700: "#002d9c",
          800: "#001d6c",
          900: "#001141",
          950: "#17275c",
        },
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'body': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      },
      boxShadow: {
        'lg-light':
          '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)'
      },
      transitionProperty: {
        'width': 'width'
      },
      textDecoration: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}

```

postcss.config.js


```js
let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig);
const autoprefixer = require('autoprefixer');

module.exports = {
	// eslint-disable-next-line no-process-env
	plugins: [tailwind, ...(process.env.HUGO_ENVIRONMENT === 'production' ? [autoprefixer] : [])],
};
```


### 步驟 6：設置 Hugo Layout 和資產

1. 在 Hugo 專案的 `assets/css` 資料夾中建立一個名為 `app.css` 的檔案。這是你的主樣式檔案，你可以在這裡引入 Tailwind CSS ：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  font-size: 16px;
}

@screen md {
  html {
    font-size: 18px;
  }
}
```

在 Hugo 專案的 `assets/js` 資料夾中建立一個名為 `app.js` 的檔案。

```js
import '../css/app.css';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import persist from '@alpinejs/persist';

// Set up and start Alpine.
(function() {
    // Register AlpineJS plugins.
    Alpine.plugin(intersect);
    Alpine.plugin(persist);
    
    // Start Alpine.
    Alpine.start();
})();
```




2. 在 Hugo 專案的 `layouts` 資料夾下，建立一個 `partials` 資料夾，並在其中創建 `head.html` 檔案。這個檔案將包含基本的 HTML head 元素，以及引入 CSS：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ .Title }}</title>
  <link rel="stylesheet" href="{{ .Site.BaseURL }}/app.css" | resources.Get | resources.Minify | resources.Fingerprint | absURL }}">
</head>
<body>
```

3. 建立一個 `footer.html` 部分並引入  JS：

```html
<script src="{{ .Site.BaseURL }}/app.bundle.js"></script>
</body>
</html>
```

4. 在 `layouts/index.html` 裡加入主頁範本：

```html
{{ partial "head.html" . }}
<div class="container mx-auto">
  <h1 class="text-3xl font-bold underline">
    Hello Hugo!
  </h1>
  <button data-dropdown-toggle="dropdown" class="bg-blue-500 text-white px-4 py-2">Dropdown button</button>
  <div id="dropdown" class="hidden">
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
    </ul>
  </div>
</div>
{{ partial "footer.html" . }}
```

### 步驟 7：編譯 hugo , js,  Tailwind CSS

使用 webpack 打包，在根目錄新增 webpack.config.js

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");
const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'assets/js/app.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'static/'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'static/images/'
        }
      },
      {
        test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader',
        }]
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  },
};
```


在 `package.json` 中， script 來編譯 Tailwind CSS。

```json
  "scripts": {
    "start": "run-p start:dev:*",
    "start:dev:hugo": "hugo server -D --watch",
    "start:dev:webpack": "webpack --mode=development --watch",
    "build": "NODE_ENV=production && run-s build:webpack build:hugo",
    "build:hugo": "hugo --destination=./.build",
    "build:webpack": "webpack --mode=production",
    "build:css": "npx tailwindcss -i ./assets/css/app.css -o ./dist/css/app.css --minify"
  },
```

執行 scripts 如以下指令：

```bash
# 更新瀏覽器清單資料庫
npx update-browserslist-db@latest
# 開發模式
npm run start
# 正式發行模式
npm run build
# 個別編譯 css
npm run build:css
```

### 步驟 8：啟動 Hugo 開發伺服器

最後，啟動 Hugo 的開發伺服器來預覽網站：

```bash
hugo server -D
```

這樣你就可以在 `localhost:1313` 上查看你的  Hugo 網站了。

---

這個基本設置讓你可以使用 Hugo 建立一個乾淨的初始專案，然後你可以進一步自訂網站樣式和內容。
