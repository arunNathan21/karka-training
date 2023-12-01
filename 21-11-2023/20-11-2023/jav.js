// let b = {
//     name : "mathan",
//     age : 23,
// }
// console.log(b.name);

// let mark = {
//     tamil : 183,
//     english : 114,
//     maths : 172,
//     chemistry : 145,
//     physics : 160,
//     biology : 142

// }
// if (mark.physics>=160 && mark.chemistry>=160 &&  mark.maths >=160) {
//     console.log("you are eligible for dental clg");
// }
// else if ((mark.tamil>=150 || mark.english>=150) && mark.maths>=150 && mark.physics >=160) {
//     console.log("you are eligible for engineering clg");
// }
// else if((mark.chemistry>=140 || mark.physics>=140) && mark.biology>=140 && mark.maths >=140 ) {
//     console.log("you are eligible for Bsc");
// }
// else {
//     console.log("you are not fit for any course");
// }


// function submit(e) {
//     e.preventDefault()
//     const form1 = document.getElementById("input1").value
//     const form2 = document.getElementById("input2").value
//     const form3 = document.getElementById("input3").value
//     let myvalue = {
//         name : form1,
//         dob : form2,
//         salary : form3

//     }
//     console.log("j");
// }

// let mark = [
//      {
//         tamil : 89,
//         english : 82
//     }
//     {
//         tamil : 89,
        
//     }
//     console.log();
// ]

let student = [
    {
        name : "mahathi",
        qualification : 12

    },
    {
        name : "james",
        qualification : "B.E"

    },
    {
        name : "jose",
        qualification : "B.A"

    },
    {
        name : "Arun",
        qualification : "B.E"

    }
    

]
for (let i = 0; i < student.length; i++) {
    console.log(student[i].name);
    
}



