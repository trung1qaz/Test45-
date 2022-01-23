// Bài 1
let x = prompt("Bài 1: Điền 1 số x", "");
let y = prompt("Bài 1: Điền 1 số y (nếu x và y giống nhau thì tổng của chúng sẽ nhân thêm 3)", "");
let z = 0;
if (Math.abs(x - y) > 0) {
    z = parseInt(x) + parseInt(y);
    console.log("Kết quả bài 1:", z);
}
else {
    z = 3 * (parseInt(x) + parseInt(y));
    console.log("Kết quả bài 1:", z)
}
// Bài 2
let a = prompt("Bài 2: Điền 1 số để xem số đó có phải bội của 3 hay 7:", "");
if (a % 3 == 0 && a % 21 > 0) {
    console.log("Kết quả bài 2:", "Bội số của 3");
}
else if (a % 7 == 0 && a % 21 > 0) {
    console.log("Kết quả bài 2:", "Bội số của 7")
}
else if (a % 21 == 0 && a > 0) {
    console.log("Kết quả bài 2:", "Bội số của cả 3 và 7")
}
else if (a == 0) {
    console.log("Kết quả bài 2:", "0 không được tính là bội số của bất kì số nào")
}
else {
    console.log("Kết quả bài 2:", "Ko là bội của 3 hay 7")
}
// Bài 3
let mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let tong = 0;
for (let i = 1; i < mang.length; i = i + 2) {
    tong = tong + mang[i];
}
console.log("Kết quả bài 3:", tong)
i
