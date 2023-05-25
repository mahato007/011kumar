// console.log("hi");

localStorage.setItem("name", "rudra");
console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");

sessionStorage.setItem("name", "rudra");
sessionStorage.setItem("name", "raj");

document.cookie = "name=rudra; expires" + new Date(2033, 0, 1).toUTCString();
console.log(document.cookie);
