'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree {
   constructor(value)
   {
      this.value = value;
      this.left = null;
      this.right = null;
   }

   insert(valor)
   {
      let newBST= new BinarySearchTree(valor)
      if(!this.value){this value = valor}
      if (valor< this.value)
      {
         if(!this.left)
         {this.left= newBST
         }
         else
         {this.left.insert(valor) }
      }
      else if(valor> this.value)
      {
         if(!this.right)
         {this.right= newBST
         }
         else
         {this.right.insert(valor) }
      }
     
   }

contains(value)
{if (!this.value) return false;
   else if(this.value === value)
   {return true}
      else if(this.left.contains(value)){return true
     }
     else if(this.right.contains(value)){return true}
     else return false;

}
   size(){
     
   }
}

let newArbol = new BinarySearchTree;
newArbol.insert(10)
newArbol.insert(18)
console.log(newArbol);
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
