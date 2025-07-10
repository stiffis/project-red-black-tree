import { RedBlackNode } from "./RedBlackNode.js";

/**
 * Clase para el árbol Red-Black
 */
class RedBlackTree {
  constructor() {
    this.nullLeaf = new RedBlackNode(null);
    this.nullLeaf.setColor("BLACK");
    this.root = this.nullLeaf;
  }

  insert(data) {
    let newNode = new RedBlackNode(data);
    newNode.left = this.nullLeaf;
    newNode.right = this.nullLeaf;
    if (this.root === this.nullLeaf) {
      this.root = newNode;
      this.root.setColor("BLACK");
    } else {
      this._insertNode(this.root, newNode);
      this.fixInsertion(newNode);
    }
  }

  _insertNode(current, node) {
    if (node.data < current.data) {
      if (current.left !== this.nullLeaf) {
        this._insertNode(current.left, node);
      } else {
        current.left = node;
        node.parent = current;
      }
    } else {
      if (current.right !== this.nullLeaf) {
        this._insertNode(current.right, node);
      } else {
        current.right = node;
        node.parent = current;
      }
    }
  }

  fixInsertion(node) {
    while (node.parent.isRed()) {
      if (node.parent === node.getGrandparent().left) {
        let uncle = node.getUncle();
        if (uncle.isRed()) {
          node.parent.setColor("BLACK");
          uncle.setColor("BLACK");
          node.getGrandparent().setColor("RED");
          node = node.getGrandparent();
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          node.parent.setColor("BLACK");
          node.getGrandparent().setColor("RED");
          this.rotateRight(node.getGrandparent());
        }
      } else {
        let uncle = node.getUncle();
        if (uncle.isRed()) {
          node.parent.setColor("BLACK");
          uncle.setColor("BLACK");
          node.getGrandparent().setColor("RED");
          node = node.getGrandparent();
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          node.parent.setColor("BLACK");
          node.getGrandparent().setColor("RED");
          this.rotateLeft(node.getGrandparent());
        }
      }
    }
    this.root.setColor("BLACK");
  }

  rotateLeft(node) {
    let child = node.right;
    node.right = child.left;
    if (child.left !== this.nullLeaf) {
      child.left.parent = node;
    }
    child.parent = node.parent;
    if (node.parent === null) {
      this.root = child;
    } else if (node === node.parent.left) {
      node.parent.left = child;
    } else {
      node.parent.right = child;
    }
    child.left = node;
    node.parent = child;
  }

  rotateRight(node) {
    let child = node.left;
    node.left = child.right;
    if (child.right !== this.nullLeaf) {
      child.right.parent = node;
    }
    child.parent = node.parent;
    if (node.parent === null) {
      this.root = child;
    } else if (node === node.parent.right) {
      node.parent.right = child;
    } else {
      node.parent.left = child;
    }
    child.right = node;
    node.parent = child;
  }
}

export { RedBlackTree };

/*
⠀ ／l         
（ﾟ､ ｡ ７   
⠀ l、ﾞ ~ヽ  
  じしf_, )ノ
*/
