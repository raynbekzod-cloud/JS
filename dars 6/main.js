console.log("1 dan 10 gacha sonlar--------------------");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("1 dan 10 gacha sonlar yig'indisi---------");
let box = 0;
for (let i = 1; i <= 10; i++) {
    box = box + i;
}

console.log(box);

console.log("1 dan 10 gacha sonlar vaqat juvt sonlarini chiqarish---------");
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("1 dan 10 gacha sonlar vaqat toq sonlarini chiqarish---------");
for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}