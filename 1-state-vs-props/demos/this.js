function magic(x) {
  this.x = x
}

console.log(this)
console.log(global === this)

console.log(magic(6))

const x = new magic(10)
console.log(x)
