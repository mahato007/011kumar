// console.log(window);
// console.log(document.getElementById("my-form"));

//multiple element selector
// console.log(document.getElementsByTagName("li"));

// console.log(document.querySelectorAll(".items"));

// const ul = document.querySelector(".item");
// console.log(ul);
// ul.remove();
// ul.lastElementChild.remove();
// ul.lastElementChild.textContent = "hello";
// ul.lastElementChild.innerHTML = "<h4>helllo</h4>";
// ul.children[2].innerText = "rudra";

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

//event listner
const form = document.querySelector("#my-form");
// console.log(form);
const name1 = document.querySelector(".name");
console.log(name1);

const email = document.querySelector(".email");

const pwd = document.querySelector(".pwd");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(name1.value);
}
