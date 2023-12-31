'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
- add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = new Node(value);
    let current = this.head;

    if (!current) {
      this.head = node;
      return value;
    }
else{
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return value;}

  }

  //
  remove()
  {
    let current = this.head;
    if(!this.head) return null
if (!current.next){
  this.head = null;
  return current.value;
}
while(current.next.next)
{
  current= current.next
}
const lastBox = current.next.value;
 current.next = null;

 return lastBox;
  }
  //

  search(valor){
    let current = this.head;
    
    while (current)
    {
      if(typeof valor !== "function")
      {
        if(valor === current.value)return current.value;
      }
        else if(valor(current.value))return current.value;
      current= current.next;
      }
      return null;
    }

  }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// const linkedList = new LinkedList();
// linkedList.add(1);
// linkedList.add(2);
// console.log(linkedList.search(1))


// linkedList.add(3);
// console.log(linkedList)

    
    /* EJERCICIO 2
    Implementar la clase HashTable.
    Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
    Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)
    
    La clase debe tener los siguientes métodos:
      - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
      - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
      - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
      - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).
    
    Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
    */

    class HashTable { 
constructor()
{
      this.bucket = []
      this.numBuckets = 35
}
set(key, value){
if(typeof key !== "string")throw TypeError('Keys must be strings')
let indice = this.hash(key)
if(!this.bucket[indice]) this.bucket[indice] = {}
this.bucket[indice][key] = value
}
hash(key){
  let contador = 0;
  for(let i = 0; i < key.length; i ++)
  {
    contador += key.charCodeAt(i);
  }
  return contador % this.numBuckets
}
      
get(key)
{
let indice = this.hash(key)
return this.bucket[indice][key]
}

hasKey(key){
  return !!this.get(key)
}
    }
    

    // No modifiquen nada debajo de esta linea
    // --------------------------------
    module.exports = {
      Node,
      LinkedList,
      HashTable,
    };
  

