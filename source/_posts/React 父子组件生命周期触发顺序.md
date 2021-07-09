---
title: React 父子组件生命周期触发顺序
date: 2021-07-09 21:19:01
tags: 
  - React
  - 生命周期
---

# React 父子组件生命周期触发顺序

| 生命周期函数       | 父组件 | 子组件    |
| ---------- | ----------- | ----------- |
| UNSAFE_componentWillMount | 1 | 2    |
| getDerivedStateFromProps | 1 | 2   |
| componentDidMount       | 2 | 1    |
| shouldComponentUpdate   | 1 | 2    |
| getSnapshotBeforeUpdate | 2 | 1    |
| componentDidUpdate      | 2 | 1    |
| componentWillUnmount    | 1 | 2    |


### 父子组件生命周期log日志
```
child    getDerivedStateFromProps    父组件触发 getDerivedStateFromProps
Grandson getDerivedStateFromProps    子组件触发 getDerivedStateFromProps
child    UNSAFE_componentWillMount   父组件触发 UNSAFE_componentWillMount
Grandson UNSAFE_componentWillMount   子组件触发 UNSAFE_componentWillMount
Grandson componentDidMount           子组件触发 componentDidMount
child    componentDidMount           父组件触发 componentDidMount
child    getDerivedStateFromProps    父组件触发 getDerivedStateFromProps
child    shouldComponentUpdate       父组件触发 shouldComponentUpdate
Grandson getDerivedStateFromProps    子组件触发 getDerivedStateFromProps
Grandson shouldComponentUpdate       子组件触发 shouldComponentUpdate
Grandson getSnapshotBeforeUpdate     子组件触发 getSnapshotBeforeUpdate
child    getSnapshotBeforeUpdate     父组件触发 getSnapshotBeforeUpdate
Grandson componentDidUpdate          子组件触发 componentDidUpdate
child    componentDidUpdate          父组件触发 componentDidUpdate
child    componentWillUnmount        父组件触发 componentWillUnmount
Grandson componentWillUnmount        子组件触发 componentWillUnmount
