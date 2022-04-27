import List from "./list";

export default class Item {
  constructor(description, completed = false, index = new Date().getTime()) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  template(list) {
    const li = document.createElement('li');
    const check = document.createElement('button');
    check.setAttribute('type', 'checkbox');
    const task = document.createElement('textarea');
    task.value = this.description;
    task.setAttribute('wrap', 'soft');
    task.setAttribute('maxlength', '128');
    task.setAttribute('style', 'resize:none;');
    task.setAttribute('onfocus', 'this.style.height = \'0px\'; this.style.height = this.scrollHeight +\'px\'');
    task.setAttribute('autofocus', 'true');
    task.setAttribute('spellcheck', 'false');
    const del = document.createElement('button');
    del.setAttribute('style', 'display:unset; opacity:0;')
    del.addEventListener('click', () => {
      document.querySelector('myapp').remove(li);
      list.removeItem(this);
    });
    task.addEventListener('focusin', () => {
      del.style.opacity = 1;
    });
    task.addEventListener('focusout', () => {
      del.style.opacity = 0;
    });

    li.appendChild(check);
    li.appendChild(task);
    li.appendChild(del);
    setTimeout(() => {}, 1000);
    return li;
  }
}