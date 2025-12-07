// Named Function
function userProfile(name){
    console.log('Hello  '   + name);
}
userProfile("Priyanka")

// Anonmymous Function

let y= setTimeout(()=>{
    console.log(`"This message is delayed by 2 seconds"`)

    },3000)

// Arrow Function
const double= (a)=>a*a
console.log(double(5))