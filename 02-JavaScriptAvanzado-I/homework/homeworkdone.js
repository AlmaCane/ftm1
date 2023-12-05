x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); //x
   console.log(a);//5
   var f = function (a, b, c) {
      b = a;
      console.log(b); //5
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);//10
};
c(8, 9, 10);
console.log(b); //10
console.log(x); //not defined

