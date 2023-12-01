// let a=10;
// if (a%2==0){
//     console.log(true);
// } else {
//     console.log(false);
// }

a= [3,4,5,6]
for (i=0; i<a.length; i++){
    if(a[i]%2==0){    //a[i]-->index 
        console.log("even",a[i])
    } else {
        console.log ("odd")
    }
}

a=5
let res=1
for(i=1;i<=a;i++){
    res = res * i
    
}
console.log(res);
