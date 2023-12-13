// x = 1;
// var a = 5;
// var b = 10;
// //
// var c = function (a, b, c) {
//    var x = 10;
//    console.log(x); //10
//    console.log(a);//
//    var f = function (a, b, c) {
//       b = a;
//       console.log(b); //a??
//       b = c;
//       var x = 5;
//    };
//    //
//    f(a, b, c);
//    console.log(b);//10??
// };


// //
// c(8, 9, 10);
// console.log(b); //10
// console.log(x); //1


// /////
// console.log(bar); //undifined
// console.log(baz); //is not defined
// foo(); //hola??
// function foo() {
//    console.log('Hola!');
// }
// var bar = 1;
// baz = 2;


// ////////////

// var instructor = 'Tony';
// if (true) {
//    var instructor = 'Franco';
// }
// console.log(instructor);//franco

// var instructor = 'Tony';
// console.log(instructor); //tony
// (function () {
//    if (true) {
//       var instructor = 'Franco';
//       console.log(instructor);//franco
//    }
// })();
// console.log(instructor);//tony

// var instructor = 'Tony';
// let pm = 'Franco';
// if (true) {
//    var instructor = 'The Flash';
//    let pm = 'Reverse Flash';
//    console.log(instructor);//the flash
//    console.log(pm); //reverse flash
// }
// console.log(instructor);//the flash
// console.log(pm);//franco
// "2" * "3"//6
// 6 / "3" //2
// 4 + 5 + "px"//"9px"
// "$" + 4 + 5//$45"
// "4" - 2//2
// "4px" - 2//"2px"?? NaN
// 7 / 0//0 infinity
// {}[0]//undefined
// parseInt("09")//09
// 2 && 5//"2 y 5" 5

// 5 && 2//"5 y 2" 2
// 5 || 0// "5 o 0" 5
// 0 || 5//"0 o 5"
// [3]+[3]-[10]//-4 23
// 3>2>1//false

//  [] == ![]//true

// function test() {
//    console.log(a);//undefined porq hoisting solo recupera la var no el valor
//    console.log(foo());//2 porq si lee las funciones

//    var a = 1;
//    function foo() {
//       return 2;
//    }
// }

// test();

// var snack = 'Meow Mix';

// function getFood(food) {
//    if (food) {
//       var snack = 'Friskies';
//       return snack;
//    }
//    return snack;
// }

// getFood(false);//nada, is false

// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function () {
//          return this.fullname;
//       },
//    },
// };

// console.log(obj.prop.getFullname());//aureliio xq el contexto es la prop

// var test = obj.prop.getFullname;

// console.log(test());//undefined porq se la llama como funcion y es una variable

// function printing() {
//    console.log(1);
//    setTimeout(function () {
//       console.log(2);
//    }, 1000);
//    setTimeout(function () {
//       console.log(3);
//    }, 0);
//    console.log(4);
// }

// printing();

// //1, 4, 3 ,2




