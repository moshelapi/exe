const button = document.getElementById('button');


async function fetchJSON(api){
    const resp = await fetch(api)
    const data = await resp.json()
    return data
}

function ditels_user(data){
    const name = document.createElement('h2');
    name.textContent = data.name.first+' '+data.name.last

    const email = document.createElement('h2');
    email.textContent = data.email
    
    const image = document.createElement('img');
    image.src = data.picture.large

    const age = document.createElement('h3');
    age.textContent = data.dob.age

    document.body.append(name,email,image,age)
}

button.addEventListener('click',()=>
{fetchJSON('https://randomuser.me/api')
.then((obj)=>{ditels_user(obj.results[0])})   

})

const button_2 = document.createElement('button');
button_2.textContent = 'more 5 users'
document.body.append(button_2)

button_2.addEventListener('click',()=>{
   for(let i = 0; i<5; i++){ fetchJSON('https://randomuser.me/api?gender=male')
.then((obj)=>{ditels_user(obj.results[0])})}
})