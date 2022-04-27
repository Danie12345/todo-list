import _ from 'lodash';
import './style.css';
import HTMLTemplate from './modules/htmltemplate.js';
import List from './modules/list.js';
import Item from './modules/list-item.js';

const myapp = document.querySelector('myapp');
const template = document.createElement('div');
const listTitle = 'Things to do for the day';
const inputName = 'add-todo';
const btnName = 'add-task';
const listName = 'to-do';
template.innerHTML = HTMLTemplate(listTitle, inputName, btnName, listName);
template.classList.add('template');
myapp.appendChild(template);
const input = document.querySelector(`#${inputName}`)
const button = document.querySelector(`#${btnName}`);
const domList = document.querySelector(`#${listName}`);

const list = new List(Item, 'list');

const addItem = (list, item) => {
  list.addItem(item);
};

const render = () => {
  domList.innerHTML = '';
  list.renderItems().forEach((item) => {
    domList.appendChild(item);
  });
};

button.addEventListener('click', () => {
  if (input.value.replace('\n', '').replace(' ', '') === '') return;
  let newItem = new Item(input.value);
  addItem(list, newItem);
  render();
  setTimeout(()=>{input.value = '';}, 1);
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && event.shiftKey) return;
  if (event.key === 'Enter') {
    button.dispatchEvent(new Event('click'))
  }
});

render();