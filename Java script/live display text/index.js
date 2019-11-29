const onChange = evt => document.getElementById('p1').innerHTML = evt.target.value

document.getElementById('inp1').addEventListener('keydown', onChange)
