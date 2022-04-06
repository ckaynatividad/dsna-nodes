class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    //implement
    // if left is null, go to left if value is less than this value. then repeat in left node
    // otherwise go right
    if (this.node.value === this.value) return;
    if (node.value < this.value && !this.left) {
      this.left = node;
    } else {
      this.left.add(node);
    }
    if (!this.right) {
      this.right = node;
    } else {
      this.right.add(node);
    }
  }
}

class PersonTreeNode {
  constructor(value) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    //implement
    // if left is null, go to left if value is less than this value. then repeat in left node
    // otherwise go right
    if (this.node.value === this.value) return;
    if (node.value < this.value && !this.left) {
      this.left = node;
    } else {
      this.left.add(node);
    }
    if (!this.right) {
      this.right = node;
    } else {
      this.right.add(node);
    }
  }

  findPerson(name) {
    // at root
    // if not root, then check left
    // if not left, then check right
    if (name === this.value) {
      return this.person;
    }
    const dir = node.value < this.value ? "left" : "right";
    return this[dir].findPerson(name);
  }
}

class LinkedListNode {
  data;
  next;
  constructor(data) {
    this.data = data;
    this.next;
  }
  getList() {
    if (!this.next) {
      return this.value;
    } else {
      return `${this.value} ${this.next.getList()}`;
    }
  }
  add(node) {
    //implement
    if (!this.next) {
      this.next = node;
    }
    this.next.add(node);
  }
}
