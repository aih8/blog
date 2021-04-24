### 命令工具
```shell
// init
npm install

// server
npm start

// git update hexo branch && github actions && master will be updated.
npm run update
```

```shell script
# 更新 package.json 中的 hexo 及个插件版本
cnpm install -g npm-check           # 检查之前安装的插件，都有哪些是可以升级的 
cnpm install -g npm-upgrade         # 升级系统中的插件
npm-check
npm-upgrade

# 更新 hexo 及所有插件
rm -rf node_modules
yarn install
```

### 目录结构
```
- public // 打包后的文件存放地址
- scaffolds // 模板文件夹
- source // 主要资源文件夹
    - _post 文章资源
    - outlet 不被编译的静态资源地址，比如html文件
    - inject 会被编译的静态资源，内容会被inject到文章中
    - tags 标签文件夹
- theme // 主题配置

```