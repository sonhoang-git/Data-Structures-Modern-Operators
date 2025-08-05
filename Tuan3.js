//Bubbling and Capturing
element.addEventListener('click', handler, true);  // Capturing
element.addEventListener('click', handler, false); // Bubbling (mặc định)
document.getElementById("outer").addEventListener("click", () => {
    console.log("Outer div clicked");
}, true); // Capturing

document.getElementById("inner").addEventListener("click", () => {
    console.log("Inner button clicked");
});

// Page Navigation
document.querySelector('#section2').scrollIntoView({ behavior: 'smooth' });

//DOM Traversing (Duyệt cây DOM)

const btn = document.querySelector('button');
console.log(btn.parentElement); // Lấy cha
console.log(btn.closest('div')); // div bao quanh gần nhất

//Passing Arguments to Event Handlers
// Dùng hàm ẩn danh
button.addEventListener('click', function () {
    myFunction(10, 'hello');
});
//Dùng .bind()
function myFunction(a, b) {
    console.log(a, b);
}

button.addEventListener('click', myFunction.bind(null, 10, 'hello'));
// Sử dụng arrow function
button.addEventListener('click', () => {
    myFunction(10, 'world');
});