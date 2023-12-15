'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2)return array
  let pivot = array[0]
  let left= [];
  let right= [];


  for (let i = 1; i < array.length; i++) {
    if(array[i]< pivot)left.push(array[i])
    else right.push(array[i])
    
  }
  return quickSort(left).concat(pivot).concat(quickSort(right))


}

  
  
  
  
  
  function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
  let mitadArr = Math.floor(array.length /2)
  let left = array.slice(0, mitadArr);
  let right = array.slice(mitadArr)

  return merge(mergeSort(left), mergeSort(right));
  
  function merge(arr1, arr2){
  const arrOrdenado= [];
  let i = 0;
  let j = 0;
  while( i < arr1.length && j < arr2.length)
  {if ( arr1[i] < arr2[j])
    {arrOrdenado.push(arr1[i]);
      i++
  }
  else {arrOrdenado.push(arr2[j]);
  j++}
  }
  return arrOrdenado.concat(arr1.slice(i))
.concat(arr2.slice(j))  // console.log(quickSort(3,1,9,5,7));
}
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
