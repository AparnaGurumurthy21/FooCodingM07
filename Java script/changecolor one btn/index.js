/**
 * You are going to use a few "browser API" to solve this exercise!
 */
 var btnColor=document.getElementById("btn1")
function onClick () {
  // Step2: add the class "clicked"
  btnColor.target.classList.toggle('clicked')
}
// Configure the event handler on the button
btnColor.addEventListener('click',onClick)
