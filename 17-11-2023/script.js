// let container = document.getElementsByClassName("main")
// console.log(container);

// let para = document.getElementById("para")
// console.log(para);g

// let tagname = document.getElementsByTagName("span");
// console.log(tagname);

// function call(){
//     let greetings =document.getElementById("greeting")
// greetings.innerHTML="hello"
// }

// function namechange() {
//     let newname = document.getElementsByTagName("h2")[0]
//     newname.innerHTML="Arun"
// }

// function call() {
//     let newDiv = document.createElement("div")
//     newDiv.textContent="newone"
//     let container = document.getElementById("container")
//     container.appendChild(newDiv)
// }


// function call() {
//     let newlist = document.createElement("li")
//     newlist.textContent="tea"
//     let container = document.getElementById("list1")
//     container.appendChild(newlist)
// }

// function call() {
//     let para1 = document.getElementById("para1")
//     para1.remove()
// }

// function call() {
//     let input = document.getElementById("input").value
// console.log(input);
// }

function call(e) {
    e.preventDefault()
    const form1 = document.getElementById("input1").value
    const form2 = document.getElementById("input2").value
    console.log(form1);
    console.log(form2);
}


