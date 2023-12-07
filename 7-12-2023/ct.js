const apiURL = "https://jsonplaceholder.typicode.com/todos"
const fetchData = fetch(apiURL)
fetchData.then(response =>{
    if (!response.ok) {
        throw new error(`HTTP error!status: ${response.status}`);
        
    }
    return response.json()
})
.then(data=>{
    // console.log("data:" , data);
    
    
        let table =
`<table border="1">
    <tr>
        <th>Si No</th>
        <th>UserId</th>
        <th>Title</th>
        <th>Completed</th>

        
    </tr>
    ${data.map((c)=>{
        if (c.completed== true) {
           return  `
           <tr>
               <td>${c.id}</td>
               <td>${c.userId}</td>
               <td>${c.title}</td>
               <td>${c.completed}</td>
           </tr>
           
       ` 
        }
       
}).join("")}
</table>`
document.getElementById("tab").innerHTML=table;
    
    
    
})
 
.catch(err =>{
    console.error("error:",err.message)
})



