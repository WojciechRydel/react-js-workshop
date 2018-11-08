function magic(x) {
  this.x = x
}

console.log('global this: ', this)
console.log('is global === this: ', global === this)

console.log('first result: ', magic(6))

const x = new magic(10)
console.log('second result: ', x)
