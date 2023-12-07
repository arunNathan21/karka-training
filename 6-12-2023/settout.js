// async function to() {
//     name1 = prompt("ent your namee");
//     if (name1 == "") {
        
//     }
// }

async function fun() {
    name1 = prompt("enter your namee");
    return new Promise((resolve)=>{
        console.log(name1);
        setTimeout(() => {
            resolve()
            
        }, 4000);
    })
}
async function myFun(){
    const res = await fun()
    setInterval(function() {
        console.log( name1 +"  "+ "Drinking water");
    }, 2000);
}
console.log(myFun());