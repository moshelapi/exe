const first = document.getElementById('first')
const last = document.getElementById('last')
const email = document.getElementById('email')
const age = document.getElementById('age')
const button = document.getElementById('button')

button.addEventListener('click',()=>{

const reqOptions = {
method: 'post',
body: JSON.stringify({ first_name: first.value,last_name:last.value,mail:email.value,ag:age.value }),
headers: {
'Content-Type': 'application/json'
}
}

fetch('https://jsonplaceholder.typicode.com/users', reqOptions)
.then(resp => resp.json())
.then(json => console.log(json));
})