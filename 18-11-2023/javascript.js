// largestnum
      
      let num = [5, 10, 20, 3, 98, 95];
      let big = num[0];
      function bigNumber() {
         for (let i = 1; i < num.length; i++) {
            if (num[i] > big)
            big = num[i];
         }
         document.getElementById('result').innerHTML =  big;
      }
      bigNumber();

// removeduplicates     


let arr = [1,4,5,7,9,7,1]; 
  
function removeduplicates(arr) { 
    return arr.filter((item, 
        index) => arr.indexOf(item) === index); 
        
} 
document.getElementById('remove').innerHTML =  removeduplicates(arr);

// common elements
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5];
const commonelements = arr1.filter((element) => {
  return arr2.includes(element);
});
document.getElementById('elements').innerHTML =  commonelements;


//counter


        var counter = 0;
        function increment(){
            counter++;
            document.getElementById("clickme").innerHTML=counter;
        }





