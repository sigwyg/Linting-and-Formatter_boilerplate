'use strict'

var foo = {
  bar: 'bar string',
  baz: 11,
}

function hoge() {
    name = prompt("Hey!")
    return false
}

// js hado-ken
getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        getMoreData(d, function (e) {
          console.log(e);
        });
      });
    });
  });
});
function getData(hoge) {
  return hoge;
}
function getMoreData(hoge) {
  return hoge++;
}

console.log(foo)
