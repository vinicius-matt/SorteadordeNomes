const addButton = document.querySelector("#addButton");
const sortButton = document.querySelector("#sortButton");
const nameInput = document.querySelector("#nameInput");
const namesList = document.querySelector("#namesList");
const result = document.querySelector("#result");

let names = [];

function updateButtons() {
  sortButton.disabled = names.length < 2;
  clearButton.disabled = names.length === 0;
}

function renderNames() {
  namesList.innerHTML = "";
  names.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    namesList.appendChild(li);
  });
}

function addNames(newNames) {
  names = names.concat(newNames);
  renderNames();
  updateButtons();
}

function addName() {
  const newNames = nameInput.value
    .split(/[,\n]/)
    .map((name) => name.trim())
    .filter((name) => name !== "");
  if (newNames.length > 0) {
    addNames(newNames);
    nameInput.value = "";
  }
}

function clearNames() {
  names = [];
  renderNames();
  updateButtons();
  result.textContent = "";
}

function sortName() {
  const index = Math.floor(Math.random() * names.length);
  const winner = names[index];
  result.textContent = `O nome sorteado foi: ${winner}`;
}

addButton.addEventListener("click", addName);
sortButton.addEventListener("click", sortName);
clearButton.addEventListener("click", clearNames);
nameInput.addEventListener("input", () => {
  addButton.disabled = nameInput.value === "";
});
