---
title: react props.children 探索
date: 2021-07-09 21:19:01
tags: 
  - React
  - props.children
---

# react props.children 探索 

#### 总结
props.children的数据类型包括:
- undefined
- string
- object (ReactElement)
- function
- array: (string|ReactElement|function)[]

### undefind
```javascript
import React from "react";

class Child extends React.Component {
  render() {
    const { children } = this.props;
    console.log("children: ", typeof children, children); // children:  'undefined' undefined
    return <div className="child">{children}</div>;
  }
}

export default function App() {
  return (
    <div>
      <Child></Child>
    </div>
  );
}
```

### string
```javascript
import React from "react";

class Child extends React.Component {
  render() {
    const { children } = this.props;
    console.log("children: ", typeof children, children); // children:  'string' 131231
    return <div className="child">{children}</div>;
  }
}

export default function App() {
  return (
    <div>
      <Child>131231</Child>
    </div>
  );
}

```

### object
```javascript
import React from "react";

class Child extends React.Component {
  render() {
    const { children } = this.props;
    console.log("children: ", typeof children, children); // children:  'object'  {$$typeof: Symbol(react.element), key: null, ref: null, props: {…}, type: ƒ, …}
    return <div className="child">{children}</div>;
  }
}

function Doll() {
  return <div>This is a doll;</div>;
}

export default function App() {
  return (
    <div>
      <Child>
        <Doll/>
      </Child>
    </div>
  );
}

```

### function
```javascript
import React from "react";

class Child extends React.Component {
  render() {
    const { children, name } = this.props;
    console.log("children: ", typeof children, children); // children:  'function' arg1 => { return "hello " + arg1; }
    return <div className="child">{children(name)}</div>;
  }
}

export default function App() {
  return (
    <div>
      <Child name="Tom">
        {(arg1) => {
          return "hello " + arg1;
        }}
      </Child>
    </div>
  );
}
```


### array
```javascript
import React from "react";
console.log(React);

class Child extends React.Component {
  render() {
    const { children, name } = this.props;
    console.log(
      "children: ",
      typeof children, // 'object'
      children instanceof Array, // true
      children // [ƒ, "This is a Text;", {…}]
    );
    return (
      <div className="child">
        {children[0](name)}
        <br/>
        {React.Children.map(children, (v, i) => {
          console.log('--->', typeof v, v, i); // 这里需要注意,React.Children.map函数会先过滤掉数组中的function类型数据
          if (typeof v === "function") {
            return v(name);
          } else {
            return v;
          }
        })}
      </div>
    );
  }
}

function Doll() {
  return <div>This is a doll;</div>;
}

export default function App() {
  return (
    <div>
      <Child name="Tom">
        {(arg1) => {
          return "hello " + arg1;
        }}
        This is a Text;
        <Doll />
      </Child>
    </div>
  );
}

```

