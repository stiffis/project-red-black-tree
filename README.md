# Red-Black Tree Implementation

Esta carpeta contiene la implementación pura de la estructura de datos Red-Black Tree, separada de la lógica de visualización.

## Estructura de Archivos

### RedBlackNode.js

Contiene la clase `RedBlackNode` que representa un nodo individual del árbol Red-Black.

#### Propiedades:

- `data`: El valor almacenado en el nodo
- `left`: Referencia al hijo izquierdo
- `right`: Referencia al hijo derecho
- `parent`: Referencia al nodo padre
- `color`: Color del nodo ('RED' o 'BLACK')
- `isNullLeaf`: Indica si es una hoja nula

#### Métodos principales:

- `isLeftChild()`: Verifica si el nodo es hijo izquierdo
- `isRightChild()`: Verifica si el nodo es hijo derecho
- `getSibling()`: Obtiene el hermano del nodo
- `getUncle()`: Obtiene el tío del nodo
- `getGrandparent()`: Obtiene el abuelo del nodo
- `isRed()`: Verifica si el nodo es rojo
- `isBlack()`: Verifica si el nodo es negro
- `setColor(color)`: Establece el color del nodo

### RedBlackTree.js

Contiene la clase `RedBlackTree` que implementa la estructura del árbol Red-Black.

#### Propiedades:

- `root`: Nodo raíz del árbol
- `nullLeaf`: Nodo especial que representa las hojas nulas

#### Métodos principales:

- `insert(data)`: Inserta un nuevo valor en el árbol
- `fixInsertion(node)`: Arregla las violaciones de las propiedades del árbol después de insertar
- `rotateLeft(node)`: Realiza una rotación hacia la izquierda
- `rotateRight(node)`: Realiza una rotación hacia la derecha

### index.js

Archivo que exporta ambas clases para facilitar la importación.

## Propiedades del Red-Black Tree

1. **Propiedad de Color**: Cada nodo es rojo o negro
2. **Propiedad de Raíz**: La raíz es siempre negra
3. **Propiedad de Hoja**: Todas las hojas (NIL) son negras
4. **Propiedad de Nodo Rojo**: Si un nodo es rojo, ambos hijos deben ser negros
5. **Propiedad de Camino Negro**: Para cada nodo, todos los caminos simples desde el nodo hasta las hojas descendientes contienen el mismo número de nodos negros

## Uso

```javascript
import { RedBlackTree } from "./redblack_tree/index.js";

const tree = new RedBlackTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
```

Esta implementación mantiene automáticamente las propiedades del árbol Red-Black durante las operaciones de inserción.

<!--
⠀ ／l
（ﾟ､ ｡ ７
⠀ l、ﾞ ~ヽ
  じしf_, )ノ
-->
