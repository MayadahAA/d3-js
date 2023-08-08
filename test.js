const obj = [
    {
        name: 'ahmed',
        age: 23
    },
    {
        name: 'mayadah',
        age: 23,
    },
    {
        name: 'nora',
        age: 23
    }
]

console.log(obj[0]);

obj.map((value, index) => {
    console.log(value.name);
})