var counter = 2;

// button > onClick > add item to list with counter

function onClick() {
  counter += 1;
  alert("hi");
  var listElUl = document.querySelector("#list1");
  var listEl = document.querySelector("#list1 li:last-child");
  var newElement = document.createElement("li");
  var newElementText = document.createTextNode("Item n." + counter);
  //newElement.apprendChild(newElementText);
  console.log('hi');
  console.log(listEl);
  newElement.appendChild(newElementText);
  listElUl.insertBefore(newElement, listEl.nextSibling);
}

document.getElementById("btn1").addEventListener("click", onClick);
