// function submit(e) {
//     e.preventDefault()
//     const fo1 = document.getElementById("input1").value
//     console.log(fo1);
// }

function call(e) {
    e.preventDefault()
    const form1 = document.getElementById("input1").value
    const form2 = document.getElementById("dob").value
    // const checkboxes = document.getElementById('check').value
    var ele=[];
    var cb = document.getElementsByName("cb1");
        var total = 0;
           for (var i = 0; i < cb.length; i++)
            {
              if (cb[i].checked)
              {
                 ele.push(cb[i].value);
              }
           } 
     if(ele.length>0){
    //    document.getElementById("result").innerHTML = "You selected " +ele;

      }
      else{
    //   document.getElementById("result").innerHTML = "You have not selected anything";
        
      }
      const radioButtons = document.querySelectorAll('input[name="size"]');
        
            let selectedSize;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    break;
                }
            }

            let selectInputs = document.querySelectorAll('#select1');
            let res = [];
            selectInputs.forEach(input => {
             res.push(input.value)
            })
           
           
        
    myValue ={
        name : form1,
        dob : form2,
        skill : ele,
        gender : selectedSize,
        select : res

    }
    // console.log(myValue);
    document.getElementById("nameN").innerHTML=form1;
    document.getElementById("dob2").innerHTML=form2;
    document.getElementById("sk2").innerHTML=ele;
    document.getElementById("gen").innerHTML=selectedSize;
    document.getElementById("deg").innerHTML=res;
}


$(document).on('click', '.delete', function() {  
    $(this).parents('tr').remove();  
  });  
//   $('.add').click(function() {  
//     $(this).parents('table').append('<tr><td class="data"></td><td class="data"></td><td class="data"></td><td><button class="edit">Edit</button> <button class="delete">Delete</button></td></tr>');  
//   });