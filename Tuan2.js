//1. forEach()
const names = ['Nam', 'Linh', 'Tùng'];
names.forEach((name, index) => {
    console.log(`Tên ${index + 1}: ${name}`);
});//Tên 1: Nam Tên 2: Linh Tên 3: Tùng

//2. map()
const numbers1 = [1, 2, 3];
const squared = numbers1.map(n => n ** 2);
console.log(squared);//[1, 4, 9]

//3. filter()
const ages = [10, 20, 30, 15];
const adults = ages.filter(age => age >= 18);
console.log(adults);//[20, 30]

// 4. reduce()
const numbers2 = [1, 2, 3, 4];
const total = numbers2.reduce((sum, num) => sum + num, 0);
console.log(total);//10

// 5. find()
const nums1 = [3, 6, 9];
const found = nums1.find(n => n > 5);
console.log(found);//6

//6. findIndex()
const arr1 = ['a', 'b', 'c'];
const index = arr1.findIndex(char => char === 'b');
console.log(index);//1

// 7. some()
const numbers3 = [1, 3, 5];
console.log(numbers3.some(n => n % 2 === 0));//false

//8. every()
const nums = [2, 4, 6];
console.log(nums.every(n => n % 2 === 0));//true

//9. flat()
const arr = [1, [2, [3, 4]]];
console.log(arr.flat());    //  [1, 2, [3, 4]]
console.log(arr.flat(2));     // [1, 2, 3, 4]

// 10. flatMap()
const words = ['hello', 'world'];
const chars = words.flatMap(word => word.split(''));
console.log(chars);//['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// 11. Magic of Chaining
const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .filter(n => n % 2 === 0)     // [2, 4]
    .map(n => n * 10)             // [20, 40]
    .reduce((a, b) => a + b, 0);  // 60

console.log(result);//60
