---
title: 指定github actions执行环境的node版本
date: 2021-04-24 12:33:51
tags:
- github action
---

## 指定github actions执行环境的node版本
很久没写blog了，最近写了个每日疫情的图表demo，发现使用github actions去更新blog失败，排查过程：
- 推送blog源代码，能正常触发github actions的操作流程，未出现报错
- 浏览器打开博客地址，发现reponse的数据为空
- github切换到博客项目的相应分支，文件都存在，貌似很正常，但是文件的size都为0
- 本地推送hexo编译好的内容是可以正常更新blog，浏览器打开为正常
- 怀疑是github actions中配置的环境问题，对比下发现node版本不同，本地12.x/actions中14.x (github actions中默认使用的最新的，时间久了，就存在本地和actions中node版本存在差异的情况)
- 更新github actions中的配置，设置node版本为12.x，推送代码，博客展示正常
- 故可以确定是某个依赖在node14.x的环境下无法正常工作导致的异常

<br/>
<br/>
下面附上在github actions中设置node版本的方法
```yaml
# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  deploy:
    runs-on: ${{ matrix.os }}
    strategy:
      fail-fast: false
      matrix:
        os: [ubuntu-latest]
        node-version: [12]

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
    # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
    - uses: actions/checkout@v2
    
    # 这里指定node版本
    - name: Setup node 12
      uses: actions/setup-node@v2
      with:
        node-version: 12.x

    # check env version
    - name: check node version
      run: node --version
    
    - name: check npm version
      run: npm --version
```
