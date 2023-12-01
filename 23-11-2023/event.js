// $(document).ready(function(){
//     $("#buttonHide").dblclick(function(){
//         $("p").css("color",'green')
//     })
// })
//on mousedown
// $(document).ready(function(){
//     $("#buttonHide").mousedown(function(){
//         $("p").hide()
//     })
// })
//on mouseup
// $(document).ready(function(){
//     $("#buttonHide").mouseup(function(){
//         $("p").hide()
//     })
// })
//on mouseleave
// $(document).ready(function(){
//     $("#buttonHide").mouseleave(function(){
//         $("p").hide()
//     })
// })
//on mouseenter
// $(document).ready(function(){
//     $("#buttonHide").mouseenter(function(){
//         $("p").hide()
//     })
// })

// $(document).ready(function(){
//     $("#buttonHide").mouseenter(function(){
//         $("p").css("color",'green').css("background","red").slideUp(3000).slideDown(3000)
//     })
// })

// $(document).ready(function(){
//     $("#button").click(function(){
//         $("p").hide();
//         alert("hide");
//     })
// })

$(document).ready(function(){
    $("#call").click(function(){
        $("p").hide("slow",function(){
            alert("hide")
        })
        
    })
})

