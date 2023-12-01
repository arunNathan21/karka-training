// function over() {
//     let container = document.getElementById("container")
//     container.style.backgroundColor="green"
// }

// function leave() {
//     let container = document.getElementById("container")
//     container.style.backgroundColor="red"
// }

// function handleChange(){
//     let selectBox = document.getElementById("selectBox").value
//     let para = document.getElementById("para")
//     para.innerHTML=selectBox

// }

function handleChange(){
    let = selectBox = document.getElementById("selectBox")
    selectBox.addEventListner("change",handleChange)
    let selectBox = document.getElementById("selectBox").value
    let para = document.getElementById("para")
    para.innerHTML=selectBox

}
