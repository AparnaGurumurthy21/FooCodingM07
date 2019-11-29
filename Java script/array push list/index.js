// This the initial state of the app
const todos = [
  'buy milk',
  'clean kitchen',
  'learn js',
]
var count=0;
// This helper function will "render" a new
// DOM item into an HTML list
const appendItem = (item) => {
  console.log('hi4')
  const el = document.createElement('li')
  const elText = document.createTextNode(item)
  el.appendChild(elText)
  document.getElementById('list1').appendChild(el)
}

// Here you need to clear the list from its
// content, so that you can later re-render all
// the content.
const clearList = () => {
  console.log('hi3')
  // ?? Can you find a better way to do this ??
  document.getElementById('list1').innerHTML = ""
}

// This is the main rendering logic, it is
// often a simple 2 steps operation:
// 1. cleanup
// 2. re-create everything
const renderList = () => {
  console.log('hi2')
  clearList()
  todos.forEach(element => appendItem(element))
}

function addArrayEl() {
  console.log('hi1')
  count += 1;
  todos.push("text " + count)
  var todosLength = todos.length
  appendItem(todos[todosLength - 1])
}
/*
Do you remember how to associate an action
to a button? We did it a few steps ago.
*/

console.log('hi')
var btnEl = document.getElementById('btn1').addEventListener('click', addArrayEl)
console.log('hi')
// As soon the app starts, we run the first
// rendering so to show the initial state.
renderList()



