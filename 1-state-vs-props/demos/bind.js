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
