
    let a =document.getElementById("name1")
    let b =document.getElementById("num")

    let names = prompt("enter your name")
    let age = prompt("enter your age")

    localStorage.setItem("userName",names+" is my name")
    localStorage.setItem("userAge",age)

    let localName = localStorage.getItem("userName")
    a.innerHTML= localName

    let localAge = localStorage.getItem("userAge")
    b.innerHTML= localAge





