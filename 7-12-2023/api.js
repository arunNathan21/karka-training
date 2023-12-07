const apiURL = "https://jsonplaceholder.typicode.com/todos/1"
const fetchData = fetch(apiURL)
fetchData.then(response =>{
    if (!response.ok) {
        throw new error(`HTTP error!status: ${response.status}`);
    }
    return response.json()
})
.then(data=>{
    console.log("data:" , data);
})
.catch(err =>{
    console.error("error:",err.message)
})