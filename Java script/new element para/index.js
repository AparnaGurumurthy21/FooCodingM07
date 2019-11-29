/*
Questions:
- how do I create a new HTML DOM Element?
- how do I add text to a P element?
- how do I place the new element into the page?
*/

document.body.onload = createP;

function createP() {
  var createPara = document.createElement("p");
  var createText = document.createTextNode("Hello world!");
  
  createPara.appendChild(createText);
  
  document.body.appendChild(createPara);
}
