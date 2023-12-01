let  student = [
    {
        name : "mahathi",
        place : "ngl",
        qualification : 12,
        education: ["BA","MA","MBA"],
        skills : ["html", "css", "js"]

    },
    {
        name : "james",
        place : "vadasery",
        qualification : "B.E",
        education: ["BE","ME"],
        skills : ["html", "css", "js"]
    },
    {
        name : "mathan",
        place : "ngl",
        qualification : "B.A",
        education: ["BA","MA","MBA"],
        skills : ["html", "css", "js","python"]
    },
    {
        name : "Arun",
        place : "vadasery",
        qualification : "B.E",
        education: ["BE","ME","phd"],
        skills : ["html", "python", "React"]
    },

]


// for ( i = 0; i < student.length; i++) {
//     console.log(student[i].name);
//     for ( j = 0; j < student[i].education.length; j++) {
//         console.log(student[i].education[j]);   
//     }
    
// }

// for (let i = 0; i < student.length; i++) {
//     for (let j = 0; j < student[i].skills.length; j++) {
//         if (student[i].skills[j]== "python") {
//             console.log(student[i].name);
//         }
//     }
    
// }

for (let i = 0; i < student.length; i++) {
        if(student[i].place == "ngl") {
            console.log(student[i].name ); 

            for (let j = 0; j < student[i].education.length; j++) {
                console.log(student[i].education[j]);
                
            }
            for (let k = 0; k < student[i].skills.length; k++) {
                console.log(student[i].skills[k]);
                
            }
        
    }  
}
