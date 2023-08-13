async function get_data(api){
try
{    const resp =await fetch(api);
    const data = await resp.json()
console.log(data.jokes);}
    catch (error){
        console.log(error);
    }
} 
get_data('https://api.humorapi.com/jokes/search?api-key=d4c374c2ef4e4a4088b125c1fb212e02')
