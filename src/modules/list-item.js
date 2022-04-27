export default class Item {
  constructor(description, completed = false, index = new Date().getTime()) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  template() {
    const li = document.createElement('li');
    const check = document.createElement('button');
    check.setAttribute('type', 'checkbox');
    const task = document.createElement('textarea');
    task.value = this.description;
    task.setAttribute('wrap', 'soft');
    task.setAttribute('maxlength', '128');
    task.setAttribute('style', 'resize:none;');
    task.setAttribute('resize', 'none');
    const move = document.createElement('div');
    const del = document.createElement('button');
    del.setAttribute('style', 'display:none')
    del.addEventListener('click', () => {
      document.querySelector('myapp').remove(li);
    });

    li.appendChild(check);
    li.appendChild(task);
    li.appendChild(move);
    li.appendChild(del);

    return li;
  }
}