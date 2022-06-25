/* jss*/

//1
function sum(arr){
    let total= arr.filter(n=>n>20).reduce((a,b)=> a+b)
    return total;
    }

console.log(sum(new Array(15,30,40,10,25)));

//2

let getNewArray= function(x){
    return x.filter(a=>a.length >5 || x.includes("a"));

}
console.log(getNewArray(new Array("faven","alexander","sam","muhammad", "king")));