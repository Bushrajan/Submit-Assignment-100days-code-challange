// Day58
//Logical operators

let a = 12;
let b = 13;
let c = 14;
let d =15;
if(a<b && b>c){
    console.log("Great_work");
}

else if(b>c && c>a){
    console.log("Do_Great_work");
}

else if(d>c || c<a){
    console.log("Do_work");
}
else{
    console.log("Do _ what you want at_work");
}
