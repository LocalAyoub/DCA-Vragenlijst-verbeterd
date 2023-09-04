//drie voorbeelden van loops:
//1. For loop:

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("DCA-ICT");
    } else if (i % 3 === 0) {
        console.log("hoi");
    } else if (i % 5 === 0) {
        console.log("DCA");
    } else {
        console.log(i);
    }
}

//2. While loop:

let i = 1;
while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("DCA-ICT");
    } else if (i % 3 === 0) {
        console.log("hoi");
    } else if (i % 5 === 0) {
        console.log("DCA");
    } else {
        console.log(i);
    }
    i++;
}

//3. Do While loop:

do {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("DCA-ICT");
    } else if (i % 3 === 0) {
        console.log("hoi");
    } else if (i % 5 === 0) {
        console.log("DCA");
    } else {
        console.log(i);
    }
    i++;
} while (i <= 100);