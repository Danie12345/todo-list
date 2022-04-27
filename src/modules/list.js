export default class List {
  constructor(ItemType, name = 'list') {
    this.ItemType = ItemType;
    this.storageName = name;
    this.list = {};
    this.#retrieveStorage();
  }

  #addItem(item) {
    this.list[item.index] = item;
  }

  #removeItem(item) {
    delete this.list[item.index];
  }

  #updateStorage() {
    localStorage.setItem(this.storageName, JSON.stringify(this.list));
  }

  #retrieveStorage() {
    if (localStorage.getItem(this.storageName) === null) {
      this.#updateStorage();
    } else {
      const tempList = JSON.parse(localStorage.getItem(this.storageName));
      Object.values(tempList).forEach((item) => {
        this.list[item.index] = new this.ItemType(item.description, item.completed, item.index);
      });
    }
  }

  addItem(item) {
    this.#addItem(item);
    this.#updateStorage();
  }

  removeItem(item) {
    this.#removeItem(item);
    this.#updateStorage();
  }

  renderItems() {
    const renders = [];
    Object.values(this.list).forEach((item) => {
      renders.push(item.template(this));
    });
    return renders;
  }
}