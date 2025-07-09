/**
 * Nodo para el árbol Red-Black
 */
class RedBlackNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = 'RED'; // 'RED' o 'BLACK'
        this.isNullLeaf = false;
    }

    /**
     * Verifica si el nodo es hijo izquierdo
     * @returns {boolean}
     */
    isLeftChild() {
        if (this.parent == null) {
            return false;
        }
        return this.parent.left === this;
    }

    /**
     * Verifica si el nodo es hijo derecho
     * @returns {boolean}
     */
    isRightChild() {
        if (this.parent == null) {
            return false;
        }
        return this.parent.right === this;
    }

    /**
     * Obtiene el hermano del nodo
     * @returns {RedBlackNode|null}
     */
    getSibling() {
        if (this.parent == null) {
            return null;
        }
        if (this.isLeftChild()) {
            return this.parent.right;
        } else {
            return this.parent.left;
        }
    }

    /**
     * Obtiene el tío del nodo
     * @returns {RedBlackNode|null}
     */
    getUncle() {
        if (this.parent == null || this.parent.parent == null) {
            return null;
        }
        return this.parent.getSibling();
    }

    /**
     * Obtiene el abuelo del nodo
     * @returns {RedBlackNode|null}
     */
    getGrandparent() {
        if (this.parent == null) {
            return null;
        }
        return this.parent.parent;
    }

    /**
     * Verifica si el nodo es rojo
     * @returns {boolean}
     */
    isRed() {
        return this.color === 'RED';
    }

    /**
     * Verifica si el nodo es negro
     * @returns {boolean}
     */
    isBlack() {
        return this.color === 'BLACK';
    }

    /**
     * Establece el color del nodo
     * @param {string} color - 'RED' o 'BLACK'
     */
    setColor(color) {
        this.color = color;
    }
}

export { RedBlackNode };

/*
⠀ ／l         
（ﾟ､ ｡ ７   
⠀ l、ﾞ ~ヽ  
  じしf_, )ノ
*/
