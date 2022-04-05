class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    //implement
    // if left is null, go to left. if left is not null, then right is null
    // if right is null, go to right
    if (!this.left) {
      this.left = node;
    }
    this.right.add(node);
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
    if (!this.left) {
      this.left = node;
    }
    this.right.add(node);
  }

  findPerson(name) {
    // at root
    // if not root, then check left
    // if not left, then check right
    if (name === this.value) {
      return this.person || null;
    } else if (!name === this.value) {
      this.left.findPerson(name);
      return this.person || null;
    } else {
      this.right.findPerson(name);
      return this.person || null;
    }
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
