'use strict'

var foo = {
  bar: 'bar string',
  baz: 11,
  hoge: hoge(),
}

function hoge() {
  let name = prompt('Hey!')
  return name
}

console.log(foo)
