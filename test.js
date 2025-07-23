//Rest Pattern
// Bài 1:Rest Pattern
// const numbers = [100, 200, 300, 400, 500, 600];
// const [first, sencond, ...others] = numbers;

// console.log(first);//100
// console.log(sencond);//200
// console.log(others);//300,400,500,600

//Bài 2
function showNameAndOthers(first, ...others) {
    console.log('first', first);
    console.log('others', others);
}
showNameAndOthers("Nam", "Lan", "Mai", "Minh");


//Bài 3:
const [a = 10, b = 20, c = 30] = [undefined, 5];
console.log(a);//a== 10 vì phần tử đầu tiên là undefined nên dùng giá trị mặc định là 10
console.log(b);//b==5 vì phần tử thứ 2 là số 5 nên ko cần giá trị mặc định
console.log(c);//c==30 vì ko có phần tử thứ 3 nên là giá trị mặc định trong mảng


//Bài 4:
colors = ["red", "green", "blue", "yellow"];
const [mainColor, , ...subColor] = colors;
console.log(mainColor, subColor);

//Bài 5:
function mergeArrays(arr1, arr2) {

    return [...arr1, ...arr2];
}
const merger = mergeArrays([1, 2], [3, 4]);
console.log(merger);//merger :[1,2,3,4] 

//Bài 6:
function sumall(...nums) {
    return nums.reduce((a, b) => a + b);
}

console.log(sumall(10, 100, 101));// 211

//Bài 7:
function mutiplyAll(...nums) {
    return nums.reduce((a, b) => a * b);
}
console.log(mutiplyAll(2, 3, 4));//24

//Bài 8:
function average(...scores) {
    if (scores.length === 0) return 0;
    const sum = scores.reduce((a, b) => a + b, 0);
    const avg = sum / scores.length;
    return Number(avg.toFixed(2));
}
console.log(average(8, 9, 10));



