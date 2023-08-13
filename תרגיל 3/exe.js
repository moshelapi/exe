async function get_data(api) {
    try {
        const resp = await fetch(api);
        const data = await resp.json()
        return  data;
    }
    catch (error) {
        console.log(error);
    }
}

const ul = document.createElement('ul');

const a = get_data('https://fakestoreapi.com/products')
a.then((data)=>{for (let obj of data){
    const a = document.createElement('li');
    a.textContent = obj.title
    ul.append(a)
}
    
})


document.body.append(ul)
