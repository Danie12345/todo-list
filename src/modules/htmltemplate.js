const HTMLTemplate = (title, input, btn, list) => `
  <div class="list-title">
    <label>${title}</label>
    <button id="sort${list}"></button>
  </div>
  <ul class="list">
    <li>
      <textarea id="${input}" wrap="soft" maxlength="128" placeholder="Add a task!" style="overflow:hidden; resize:none;"></textarea>
      <button id="${btn}" class="add-btn"></button>
    </li>
  </ul>
  <ul id="${list}" class="list"></ul>
  <div class="clear"><a href="">Clear all selected</a></div>
`;


export default HTMLTemplate;