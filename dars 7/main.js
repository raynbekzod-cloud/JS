let son = prompt("Son kiriting:");

if (son % 3 === 0 && son % 5 === 0) {
    console.log("FIZZBUZZ");
} else if (son % 3 === 0) {
    console.log("FIZZ");
} else if (son % 5 === 0) {
    console.log("BUZZ");
} else {
    console.log("Hech biriga bo'linmaydi");
}