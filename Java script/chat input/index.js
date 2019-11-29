/*
Questions:
- what happens if you remove the event listener, run the exercise, then click "POST"?
- what does "preventDefault()" do?
- what does "stopPropagation()" do?
*/
const onFormSubmit = (event) => {
  event.preventDefault()
  //event.stopPropagation()
  const input = document.querySelector('#chat input[type="text"]')
  const text = input.value
  if (text.length > 0)
    {
    input.value = ''
    input.focus()    
    alert(text) 
    }
  else {
    input.focus()
    alert('The text is empty')
  }
  
}

document.getElementById('chat').addEventListener('submit', onFormSubmit)
//document.querySelector('input[type="submit"]').addEventListener('submit', onFormSubmit, false)

