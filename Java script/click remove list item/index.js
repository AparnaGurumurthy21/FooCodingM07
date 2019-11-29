 /*
Questions:
- do you remember "querySelectorAll"?
- and the ".forEach()" API?

https://codepen.io/marcopeg/pen/bGbxbjK
*/

var listEl = document.querySelectorAll('ul li')
listEl.forEach(checkClick)

function checkClick(event) {
  event.addEventListener('click', removeElement)
  console.log("hi1")
}

function removeElement() {
  this.remove()
  console.log("hi2")
}
