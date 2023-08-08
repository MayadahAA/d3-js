const arr = ["ss", '2', true, 4, 5];

console.log(arr);
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
}


let color = ['blue', 'black', 'orange'];

let color2 = ['white', 'red'];
let colors = color.concat(color2);
console.log(colors);


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i]);
    }
}


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let even = numbers.filter(function (currentValue){
    
    return currentValue % 2 == 0;
} 
) 
console.log(even);

let odd = numbers.filter(function (currentValue){
    return currentValue % 2 != 0;
} 
) 
console.log(odd);

const firsteven = numbers.find(function (x){
    return x % 2 == 0;
})
console.log(firsteven);

numbers.forEach(function (x, i){
 numbers[i] = x * 2
});
    console.log(numbers);
console.log(numbers.includes(11));


let strs = ['drink', 'your', 'coffee', 'now']

numbers.sort(function (a, b){
    return b - a;
});

console.log(numbers);

const everyIsOdd = numbers.every(function(x){
    return x % 2 != 0;
})
console.log(everyIsOdd);

const someIs = numbers.some(function (x){
        return x % 2 == 0;
}
);
console.log(someIs);
