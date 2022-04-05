class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    //implement
    if (!this.left) {
      this.left = node;
    }
    this.right.add(node);
  }
}
