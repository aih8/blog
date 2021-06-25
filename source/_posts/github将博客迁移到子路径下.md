---
title: github将博客迁移到子路径下
date: 2021-04-25 13:06:05
tags:
  - 博客
  - 迁移
  - 子路径
---

### 迁移流程
1. 在github上新建blog仓库，将博客的仓库推送过去（git remote 的相关操作）
```shell
方法一：
git remote rm origin
git remote add origin [url]

方法二
git remote set-url origin [url]
```
2. 修改_config.yaml文件，更新仓库地址、发布分支置为gh-pages以及下面的子目录配置
```shell
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://xxx.github.io/blog
root: /blog/

# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: git@github.com:xxx/blog.git
  branch: gh-pages
```
3. 在github上的blog仓库中进行github pages的设置，发布分支置为gh-pages，目录为/(root)
4. 由于使用github actions进行博客编译，需要设置一些变量，页面路径Settings->Secret，进行参数同步
