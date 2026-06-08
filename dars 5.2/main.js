let a = prompt("Enter a:");
let b = prompt("Enter b:");
let c = prompt("Enter c:");

if (a > b && a > c) {
    console.log("a eng kota son");
}else if (b > a && b > c) {
    console.log("b eng kota son");
}else if (c > a && c > b) {
    console.log("c eng kota son");
}

let a = prompt("son kiriting:");

if (a >=90 && a <=100) {
    console.log("a")
}else if (a >=80 && a <=100) {
    console.log("b")
}else if (a >=70 && a <=100) {
    console.log("c")
}
else if (a >=60 && a <=100) {
    console.log("d")
}
else if (a <=60 && a <=100) {
    console.log("f")
}
else {
    console.log("jini norm son yoz")
}