let todos = [
  'buy milk',
  'clean kitchen',
  'learn js',
]

const removeItem = (itemToDelete) => {
 console.log('hi5');
  todos = todos.filter((item) => {
    return item !== itemToDelete
  })
  
  renderList()
}


const appendItem = (item, index) => {
  console.log('hi4');
  const el = document.createElement('li')
  const elText = document.createTextNode(item)
  
  el.addEventListener('click', () => {
    removeItem(item, index)
  })
  
  el.appendChild(elText)
  document.getElementById('list1').appendChild(el)
}

const clearList = () =>
  //console.log('hi3')
  document.querySelectorAll('#list1 *').forEach(item => item.remove())

const renderList = () => {
  console.log('hi2');
  clearList()
  todos.forEach(appendItem)
}

const addNewItem = () => {
  console.log('hi1');
  todos.push(`Item n.${todos.length + 1}`)
  renderList()
}

document
  .querySelector('#btn1').addEventListener('click', addNewItem)

renderList()
