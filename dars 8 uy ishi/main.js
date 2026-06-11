let masalaRaqami = prompt("Qaysi for masalasini tekshirmoqchisiz? (1 dan 10 gacha):");
masalaRaqami = +(masalaRaqami);

// -------------------------------------------------------------------------
if (masalaRaqami === 1) {
    // For1. k sonini n marta chiqarish
    let sonK = prompt("k sonini kiriting:");
    let sonN = prompt("n marta chiqsin (n > 0):");
    sonK = +(sonK);
    sonN = +(sonN);

    console.log("--- FOR 1 START ---");
    for (let qadam = 1; qadam <= sonN; qadam = qadam + 1) {
        console.log(sonK);
    }
    console.log("--- FOR 1 END ---");
} 

else if (masalaRaqami === 2) {
    // For2. a dan b gacha hamma sonlarni va ularning sonini chiqarish
    let boshlanish = prompt("boshlanish soni (a):");
    let tugash = prompt("tugash soni (b):");
    boshlanish = +(boshlanish);
    tugash = +(tugash);

    let jamiSonlar = 0;

    console.log("--- FOR 2 START ---");
    for (let i = boshlanish; i <= tugash; i = i + 1) {
        console.log(i);
        jamiSonlar = jamiSonlar + 1;
    }
    console.log("Jami sonlar miqdori: " + jamiSonlar);
    console.log("--- FOR 2 END ---");
} 

else if (masalaRaqami === 3) {
    // For3. a dan b gacha sonlarni kamayish tartibida chiqarish (a va b kirmaydi)
    let kichikSon = prompt("kichik son (a):");
    let kattaSon = prompt("katta son (b):");
    kichikSon = +(kichikSon);
    kattaSon = +(kattaSon);

    let hisoblagich = 0;

    console.log("--- FOR 3 START ---");
    for (let x = kattaSon - 1; x > kichikSon; x = x - 1) {
        console.log(x);
        hisoblagich = hisoblagich + 1;
    }
    console.log("Jami chiqarilgan sonlar: " + hisoblagich);
    console.log("--- FOR 3 END ---");
} 

else if (masalaRaqami === 4) {
    // For4. 1 kg dan 10 kg gacha konfet narxi
    let birKgNarxi = prompt("1 kg konfet narxini kiriting:");
    birKgNarxi = +(birKgNarxi);

    console.log("--- FOR 4 START ---");
    for (let kg = 1; kg <= 10; kg = kg + 1) {
        let jamiPuli = kg * birKgNarxi;
        console.log(kg + " kg = " + jamiPuli + " so'm");
    }
    console.log("--- FOR 4 END ---");
} 

else if (masalaRaqami === 5) {
    // For5. 0.1 kg dan 1 kg gacha konfet narxi
    let konfetBaxosi = prompt("1 kg konfet narxini kiriting:");
    konfetBaxosi = +(konfetBaxosi);

    console.log("--- FOR 5 START ---");
    for (let vazn = 0.1; vazn <= 1; vazn = vazn + 0.1) {
        let jamiBaxosi = vazn * konfetBaxosi;
        console.log(vazn.toFixed(1) + " kg = " + jamiBaxosi + " so'm");
    }
    console.log("--- FOR 5 END ---");
} 

else if (masalaRaqami === 6) {
    // For6. 1.2 kg dan 2 kg gacha konfet narxi
    let shirinlikNarxi = prompt("1 kg konfet narxini kiriting:");
    shirinlikNarxi = +(shirinlikNarxi);

    console.log("--- FOR 6 START ---");
    for (let ogirlik = 1.2; ogirlik <= 2; ogirlik = ogirlik + 0.2) {
        let yakuniyNarx = ogirlik * shirinlikNarxi;
        console.log(ogirlik.toFixed(1) + " kg = " + yakuniyNarx + " so'm");
    }
    console.log("--- FOR 6 END ---");
} 

else if (masalaRaqami === 7) {
    // For7. a dan b gacha bo'lgan sonlar yig'indisi
    let sonA = prompt("boshlang'ich son (a):");
    let sonB = prompt("oxirgi son (b):");
    sonA = +(sonA);
    sonB = +(sonB);

    let umumiyYigindi = 0;

    console.log("--- FOR 7 START ---");
    for (let n = sonA; n <= sonB; n = n + 1) {
        umumiyYigindi = umumiyYigindi + n;
    }
    console.log("Yig'indi javobi: " + umumiyYigindi);
    console.log("--- FOR 7 END ---");
} 

else if (masalaRaqami === 8) {
    // For8. a dan b gacha bo'lgan sonlar ko'paytmasi
    let boshlashSon = prompt("boshlang'ich son (a):");
    let tugashSon = prompt("oxirgi son (b):");
    boshlashSon = +(boshlashSon);
    tugashSon = +(tugashSon);

    let umumiyKopaytma = 1;

    console.log("--- FOR 8 START ---");
    for (let k = boshlashSon; k <= tugashSon; k = k + 1) {
        umumiyKopaytma = umumiyKopaytma * k;
    }
    console.log("Ko'paytma javobi: " + umumiyKopaytma);
    console.log("--- FOR 8 END ---");
} 

else if (masalaRaqami === 9) {
    // For9. a dan b gacha bo'lgan sonlar kvadratlarining yig'indisi
    let startSon = prompt("boshlang'ich son (a):");
    let endSon = prompt("oxirgi son (b):");
    startSon = +(startSon);
    endSon = +(endSon);

    let jamiKvadratlar = 0;

    console.log("--- FOR 9 START ---");
    for (let j = startSon; j <= endSon; j = j + 1) {
        jamiKvadratlar = jamiKvadratlar + (j * j);
    }
    console.log("Kvadratlar yig'indisi: " + jamiKvadratlar);
    console.log("--- FOR 9 END ---");
} 

else if (masalaRaqami === 10) {
    // For10. S = 1 + 1/2 + 1/3 + ... + 1/n yig'indi
    let chegaraN = prompt("n sonini kiriting (n > 0):");
    chegaraN = +(chegaraN);

    let jamiS = 0;

    console.log("--- FOR 10 START ---");
    for (let boluvchi = 1; boluvchi <= chegaraN; boluvchi = boluvchi + 1) {
        jamiS = jamiS + (1 / boluvchi);
    }
    console.log("S yig'indi natijasi: " + jamiS);
    console.log("--- FOR 10 END ---");
} 

else {
    console.log("Xato! Faqat 1 dan 10 gacha raqam kiriting.");
}