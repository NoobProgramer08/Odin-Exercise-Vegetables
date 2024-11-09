const input = document.querySelector("#input");
const lists = document.querySelector(".lists");
const btn = document.querySelector("#btn");

btn.addEventListener("click", addTask);

function addTask() {
  let value = input.value;
  if (value == "") {
    return;
  }

  input.value = "";
  let li = document.createElement("li");
  li.classNames = "vegetable";
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.id = "btn-delete";
  li.innerHTML = value;
  li.appendChild(span);
  li.appendChild(btn);
  lists.appendChild(li);
  console.log(lists);
}
