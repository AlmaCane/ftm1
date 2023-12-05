'use strict';


function BinarioADecimal(num) {
   
   var separar = num.split("");
   var reversa = separar.reverse();
   var numeroalreves = reversa.map(Number);

  var arreglito = [];
  for (let i = 0; i < numeroalreves.length ; i ++) {
   var numerillos = numeroalreves[i] * 2 ** i;
arreglito.push(numerillos)
  }
 var resultado = 0;
for (let i = 0; i < arreglito.length; i++) {
  resultado += arreglito[i];
}


return resultado;
}


function DecimalABinario(num) {

   var restos = [];

   while (num > 0) {
      restos.push(num % 2);
      num = Math.floor (num / 2);
   }
   var final = restos.map(String).reverse().join("");

  return final;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
