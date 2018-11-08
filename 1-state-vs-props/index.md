---
title: 'State vs Props / Component Types'
subtitle: 'And how to live with them'
fontsize: 8pt
date: 'Lesson #1'
---

# State vs Props - The differences
![](./images/differences.jpg)

# State and Props - The differences
## State - **mutable** inside a component
Internal for each stateful component. Can be changed but not directly!

## Props - **immutable** inside a component
Comes from "outside" to initialize state or to operate on them without
modifications


# What to use and when?
![](./images/confusion.jpg)

# Props - from parent to child
![](./images/waterfall.jpg)

# State - private for component
![](./images/watch.jpg)

# State - how to change
```javascript
class MagicComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foo: 1,
      bar: 'nah',
    }
  }

  badStateChange() {
    this.state.foo = 2
  }

  goodStateChange() {
    this.setState({foo: 3})
  }
}
```


# State mutation - are there any quirks?
![](./images/statue-wrong-face.jpg)

# `setState` - additional use cases
## 1) After state change callback
When we want to execute some function right after state change
```javascript
this.setState({}, () => {
  console.log('state has been changed')
})
```
## 2) Using updater function as argument
```javascript
interface Updater {
  (state: Object, props: Object): Object
}
```
Usage
```javascript
this.setState((prevState, props) => {
  return {...} // new state
})
```

# Back to Props
## Is this all?

# Props - common mistakes
## 1) Passing props deeply through many components
When component accepts props and passes them further, but does not uses them -
acts like a proxy for subset of props.


# Props - common mistakes
## 1) Passing props deeply through many components
When component accepts props and passes them further, but does not uses them -
acts like a proxy for subset of props.

## 2) Passing props as strings where proper objects are required
```javascript
class Container extends Component {
  render() {
    <NumberInput value="2">
  }
}
```


# Props - common mistakes
## 1) Passing props deeply through many components
When component accepts props and passes them further, but does not uses them -
acts like a proxy for subset of props.

## 2) Passing props as strings where proper objects are required
```javascript
class Container extends Component {
  render() {
    <NumberInput value="2">
  }
}
```

## 3) Props as unbound functions
```javascript
class Container extends Component {
  doMagic(arg) {....}

  render() {
    <Child onChange={this.doMagic}>
  }
}

```


# Render Props
Composition over inheritance!
![](images/lego.jpg)


# Render Props - functions as props
## Every `prop` can be a function!
```javascript
<Component renderHeader=(text => <Header text={text}>)/>
```


# Render Props - functions as props
## Every `prop` can be a function!
```javascript
<Component render=(text => <Header text={text}>)/>
```
## Even `children`
```javascript
<WithX>
  {x => <Component x={x}/>}
</WithX>
```

# Default props
```javascript
class SomeComponent extends Component {
  ...
}

SomeComponent.defaultProps = {
  x: 10
}
```
or as a static property

```javascript
class SomeComponent extends Component {
  static defaultProps = {
    x: 10
  }

  ...
}
```


# Component types - Stateful, Stateless, Pure
## Different tools for different jobs
![](images/3-tools.jpg)


# Stateless Component
![](images/single-paint-brush.jpg)


# Stateless Component
It is just a **pure** function

```javascript
const statelessComponent = (props) => (
  <div>
    <h1>{props.header}</h1>
    <p>{props.paragraph}</p>
  </div>
)
```
or
```javascript
function statelessComponent(props) {
  return (
    <div>
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
    </div>
  )
}
```


# Stateful Component
![](images/hourglass.jpg)


# Stateful Component
A `React.Component` subclass instance
```javascript
class StateFulComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 1,
      b: 2,
    }
  }

  render() {
    ....
  }
}
```

# Pure Component
When there is need for optimization
![](images/board.jpg)


# Pure Component
Implements the `shouldComponentUpdate` method
```javascript
interface shouldComponentUpdate {
  (nextProps: Object, nextState: Object): boolean
}

class MyPureComponent extends React.PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    return ... // comparison result
  }
}
```

# Demo time!
![](images/happy-ball.jpg)


# Time for ...
![](images/javascript-logo.png)


# JS - let's talk about
## - `Function.prototype.bind`
## - `this` keyword

#
## JS - `Function.prototype.bind`
Creates new function with bound **execution context**
```javascript
class Foo {
  constructor(x) {
    this.x = x
  }

  do() {
    return this.x
  }
}
const foo = new Foo(4)
const unboundDo = foo.do
const boundDo = foo.do.bind({x: 5})

// what are the outputs
console.log('method', foo.do())
console.log('boundDo', boundDo())
console.log('unboundDo', unboundDo())
```

# JS - `this`
Reference to current **execution context**

```javascript
function magic(x) {
  this.x = x
}

console.log(this)
console.log(global === this)

console.log(magic(6))

const x = new magic(10)
console.log(x)
```

# The end
Questions?
![](images/question-marks.jpg)
