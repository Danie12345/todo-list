import './style.css';
import HTMLTemplate from './modules/htmltemplate.js';
import List from './modules/list.js';
import Item from './modules/list-item.js';

const myapp = document.querySelector('.myapp');
const template = document.createElement('div');
const listTitle = 'Today\'s to-do\'s:'.slice(0, 69);
const inputName = 'add-todo';
const btnName = 'add-task';
const listName = 'to-do';
const clearName = `clear-${listName}`;
template.innerHTML = HTMLTemplate(listTitle, inputName, btnName, listName, clearName);
template.classList.add('template');
myapp.appendChild(template);
const input = document.querySelector(`#${inputName}`);
const button = document.querySelector(`#${btnName}`);
const domList = document.querySelector(`#${listName}`);
const clearBtn = document.querySelector(`#${clearName}`);

const list = new List(Item, listName, 'list');

const addItem = (list, item) => {
  list.addItem(item);
};

const render = (added = false) => {
  if (added) {
    domList.appendChild(new Item(input.value).template(list));
  } else {
    domList.innerHTML = '';
    list.renderItems().forEach((item) => {
      setTimeout(() => {
        item.querySelector('textarea').dispatchEvent(new Event('focus'));
      }, 0);
      domList.appendChild(item);
    });
  }
  input.select();
};

button.addEventListener('click', () => {
  if (input.value.replace('\n', '').replace(' ', '') === '') return;
  const newItem = new Item(input.value);
  addItem(list, newItem);
  render(true);
  input.value = '';
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && event.shiftKey) return;
  if (event.key === 'Enter') {
    button.dispatchEvent(new Event('click'));
  }
});

clearBtn.addEventListener('click', () => {
  list.removeSelected();
  render();
});

render();