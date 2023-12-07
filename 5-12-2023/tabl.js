const  student = [
    {
        name : "manish",
        age : 25,
        place : "ngl"
    },
    {
        name : "ajay",
        age : 22,
        place : "ngl"
    },
    {
        name : "jemil",
        age : 22,
        place : "ngl"
    },
    {
        name : "james",
        age : 22,
        place : "ngl"
    },
    {
        name : "mahathi",
        age : 17,
        place : "ngl"
    },
    {
        name : "arun",
        age : 25,
        place : "ngl"
    },
    {
        name : "mathan",
        age : 23,
        place : "ngl"
    },
]


// const peopleMapping = stdnt.map(person=>({...person}))
// console.log(peopleMapping);

let table =
`<table border="1">
    <tr>
        <th>Si no</th>
        <th>name</th>
        <th>age</th>
        <th>place</th>
        
    </tr>
    ${student.map((person,index)=>`
        <tr>
            <td>${index+1}</td>
            <td>${person.name}</td>
            <td>${person.age}</td>
            <td>${person.place}</td>

        </tr>
        
    `).join("")}
</table>`
document.getElementById("tab").innerHTML=table;