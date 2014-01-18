function adder(a) { // 7  

  return function(b) {
    return a + b;
  }
} 

var adder7 = adder(7);

var result = adder7(4);

console.log(result);

var obj = {
  abc: 1,
  adder: function(a, b){
    return a+b;
  }
};

console.log(obj.abc);