const HTMLTemplate = (title, input, btn, list) => `
  <div class="list-title">
    <label>${title}</label>
    <button class="fa-solid fa-arrow-rotate-left undo" id="sort${list}" aria-label="Undo task repositioning"></button>
  </div>
  <ul class="list">
    <li>
      <input id="${input}" maxlength="128" placeholder="Add a task!" spellcheck="false">
      <button id="${btn}" class="add-item">↵</button>
    </li>
  </ul>
  <ul id="${list}" class="list list-items"></ul>
  <div class="clear"><a href="#" onclick="return false;">Clear all selected</a></div>
`;

export default HTMLTemplate;