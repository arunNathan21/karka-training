// async function fun() {
//     return 10
// }

// console.log(fun())

async function fun() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(10)
            console.log("start");
        }, 1000);
    })
}
async function myFun(){
    const res = await fun()
    console.log(res);
    console.log("complete");
}
console.log(myFun());