function sub(e) {
    e.preventDefault()
    var task1_input = document.getElementById("item1").value;
    // var task2_input = document.getElementById("item2").value;

    document.getElementById("list_view").innerHTML=task1_input;
    // console.log(task1_input);
    // console.log(task2_input);
}
