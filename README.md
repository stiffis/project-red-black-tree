# 🌳 Red-Black Tree Implementation

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/License-GPL%20v3-blue.svg?style=for-the-badge" alt="License">
</div>

## 📋 Descripción

Implementación completa de un **Árbol Rojo-Negro** (Red-Black Tree) con visualización interactiva web. Este proyecto incluye tanto la implementación pura de la estructura de datos como una interfaz visual que permite realizar operaciones de inserción, eliminación y búsqueda de manera interactiva.

## 👥 Integrantes

- **[stiffis](https://github.com/stiffis)** - Desarrollador principal

## 🗂️ Estructura del Proyecto

```
project-red-black-tree/
├── 📁 assets/
│   ├── 📁 css/
│   │   └── common-styles-responsive.css
│   └── 📁 js/
│       ├── iframeResize.js
│       └── instruction-box.js
├── 📁 rbt_operations/
│   ├── 📁 css/
│   │   └── style.css
│   ├── 📁 js/
│   │   ├── RedBlack.js
│   │   └── 📁 lib/
│   │       ├── Algorithm.js
│   │       ├── AnimatedCircle.js
│   │       ├── AnimatedLabel.js
│   │       ├── AnimatedObject.js
│   │       ├── AnimationMain.js
│   │       ├── CustomEvents.js
│   │       ├── HighlightCircle.js
│   │       ├── Line.js
│   │       ├── ObjectManager.js
│   │       └── UndoFunctions.js
│   └── redblack.html
├── 📁 redblack_tree/
│   ├── RedBlackNode.js
│   ├── RedBlackTree.js
│   └── index.js
├── LICENSE
└── README.md
```

## 🏗️ Estructura de Archivos

### 📂 redblack_tree/

#### `RedBlackNode.js`
Contiene la clase `RedBlackNode` que representa un nodo individual del árbol Red-Black.

**Propiedades:**
- `data`: El valor almacenado en el nodo
- `left`: Referencia al hijo izquierdo
- `right`: Referencia al hijo derecho
- `parent`: Referencia al nodo padre
- `color`: Color del nodo ('RED' o 'BLACK')
- `isNullLeaf`: Indica si es una hoja nula

**Métodos principales:**
- `isLeftChild()`: Verifica si el nodo es hijo izquierdo
- `isRightChild()`: Verifica si el nodo es hijo derecho
- `getSibling()`: Obtiene el hermano del nodo
- `getUncle()`: Obtiene el tío del nodo
- `getGrandparent()`: Obtiene el abuelo del nodo
- `isRed()`: Verifica si el nodo es rojo
- `isBlack()`: Verifica si el nodo es negro
- `setColor(color)`: Establece el color del nodo

#### `RedBlackTree.js`
Contiene la clase `RedBlackTree` que implementa la estructura del árbol Red-Black.

**Propiedades:**
- `root`: Nodo raíz del árbol
- `nullLeaf`: Nodo especial que representa las hojas nulas

**Métodos principales:**
- `insert(data)`: Inserta un nuevo valor en el árbol
- `fixInsertion(node)`: Arregla las violaciones de las propiedades del árbol después de insertar
- `rotateLeft(node)`: Realiza una rotación hacia la izquierda
- `rotateRight(node)`: Realiza una rotación hacia la derecha

#### `index.js`
Archivo que exporta ambas clases para facilitar la importación.

### 📂 rbt_operations/

#### `redblack.html`
Interfaz web interactiva que permite visualizar y manipular el árbol Red-Black.

**Características:**
- Visualización gráfica del árbol
- Operaciones de inserción, eliminación y búsqueda
- Controles de animación
- Comentarios explicativos de las operaciones

#### `js/`
Contiene toda la lógica de visualización y animación:
- **RedBlack.js**: Implementación específica para la visualización
- **lib/**: Bibliotecas de animación y manejo de objetos gráficos

## 🔴⚫ Propiedades del Red-Black Tree

1. **Propiedad de Color**: Cada nodo es rojo o negro
2. **Propiedad de Raíz**: La raíz es siempre negra
3. **Propiedad de Hoja**: Todas las hojas (NIL) son negras
4. **Propiedad de Nodo Rojo**: Si un nodo es rojo, ambos hijos deben ser negros
5. **Propiedad de Camino Negro**: Para cada nodo, todos los caminos simples desde el nodo hasta las hojas descendientes contienen el mismo número de nodos negros

## 🚀 Uso

### Implementación básica

```javascript
import { RedBlackTree } from "./redblack_tree/index.js";

const tree = new RedBlackTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
```

### Visualización interactiva

1. Abrir `rbt_operations/redblack.html` en un navegador web
2. Utilizar los controles para insertar, eliminar o buscar elementos
3. Observar las animaciones que muestran cómo se mantienen las propiedades del árbol

## 🛠️ Tecnologías Utilizadas

- **JavaScript ES6+**: Implementación de la estructura de datos
- **HTML5**: Estructura de la interfaz web
- **CSS3**: Estilos y diseño responsive
- **Canvas API**: Renderizado gráfico del árbol
- **jQuery**: Manipulación del DOM y animaciones

## 🎯 Características

- ✅ Implementación completa del árbol Red-Black
- ✅ Visualización interactiva en tiempo real
- ✅ Operaciones de inserción, eliminación y búsqueda
- ✅ Animaciones paso a paso
- ✅ Interfaz responsiva
- ✅ Comentarios explicativos durante las operaciones

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/stiffis/project-red-black-tree.git

# Navegar al directorio del proyecto
cd project-red-black-tree

# Abrir la visualización en el navegador
open rbt_operations/redblack.html
```

## 💡 Complejidad

- **Inserción**: O(log n)
- **Eliminación**: O(log n)
- **Búsqueda**: O(log n)
- **Espacio**: O(n)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia GPL v3. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 📚 Referencias

- [Introduction to Algorithms - Cormen, Leiserson, Rivest, Stein](https://mitpress.mit.edu/books/introduction-algorithms)
- [Red-Black Trees - Wikipedia](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)

---

<div align="center">
  <p>Hecho con ❤️ por <a href="https://github.com/stiffis">stiffis</a></p>
</div>

<!--
⠀ ／l
（ﾟ､ ｡ ７
⠀ l、ﾞ ~ヽ
  じしf_, )ノ
-->
