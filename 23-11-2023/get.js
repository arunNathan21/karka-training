// GET

// $(document).ready(function(){
//     $("#button").click(function(){
//         console.log($("p").text());
//     })
// })

// $(document).ready(function(){
//     $("#button").click(function(){
//         console.log($("p").html());
//     })
// })

// $(document).ready(function(){
//     $("#button").click(function(){
//         console.log($("#input").val());
//     })
// })

// $(document).ready(function(){
//     $("#button").click(function(){
//         console.log($("p").text('kumar'));
//     })
// })
// $(document).ready(function(){
//     $("#button").click(function(){
//         console.log($("p").html('<h2>mathan</h2>'));
//     })
// })

// $(document).ready(function(){
//     $("#button").click(function(){
//         console.log($("#input").val('james'));
//     })
// })

// $(document).ready(function(){
//     $("#button").click(function(){
//         console.log($("p").append('kumar'));
//     })
// })

// $(document).ready(function(){
//     $("#button").click(function(){
//         console.log($("p").prepend('kumar'));
//     })
// })

// $(document).ready(function(){
//     $("#button").click(function(){
//         console.log($("p").remove());
//     })
// })
// $(document).ready(function(){
//     $("#button").click(function(){
//         console.log($("p").addClass('kumar'));
//     })
// })

// $(document).ready(function(){
//     $("#button").click(function(){
//         for (let i = 0; i < $("p").length; i++) {
//             if($("p"[i])%2==0){
//                 // console.log($("p"[i]));
//  
//             }
//          }
        
//     })
// })
// let  a = [1,2,3,4,5,6,7,8]


$(document).ready(function(){
    $("#button").click(function(){
        let p = JSON.parse($("p").text());
        let b= [];
        for (let i = 0; i < p.length; i++) {
            if (p[i] % 2 == 0 ) {
                b.push(p[i])
                // console.log(p[i]);
                // document.getElementById("input2").innerHTML=b
                $("h3").text(b);
            }
            
        }
    });
});

// a= [1,2,3,4]
// b=[]
// for (let i = 0; i < a.length; i++) {
//     if (a[i]%2 == 0) {
//         b.push(a[i])
//     }
//     console.log(b);
// }





