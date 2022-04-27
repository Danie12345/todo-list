const HTMLTemplate = (title, input, btn, list) => `
  <div>
    <label>${title}</label>
    <button id="sort${list}"></button>
  </div>
  <ul class="list">
    <li>
      <textarea id="${input}" wrap="soft" maxlength="128" style="overflow:hidden; resize:none;"></textarea>
      <button id="${btn}" class="add-btn"></button>
    </li>
  </ul>
  <ul id="${list}" class="list"></ul>
  <a>Clear all selected</a>
`;


export default HTMLTemplate;