const characters = [
    {
        name: "Luke Skywalker",
        height: 1.77,
        gender: "male",
        mass: 77,
        eye_color: "brown",
    },
    {
        name: "Leia Organa",
        height: 1.6,
        gender: "female",
        mass: 56,
        eye_color: "blue",
    },
    {
        name: "Han Solo",
        height: 1.8,
        gender: "male",
        mass: 80,
        eye_color: "brown",
    },
    {
        name: "Chewie",
        height: 2.22,
        gender: "male",
        mass: 190,
        eye_color: "black",
    },
    {
        name: "kevien",
        height: 1.06,
        gender: "male",
        mass: 32.2,
        eye_color: "red",
    },
];


// // find
// // 1.0
let first_blue = characters.find(({ eye_color }) => eye_color === 'blue');
console.log(first_blue.name);
// // Leia Organa

// // 1.1
const first_mass = characters.find(({ mass }) => mass > 50);
console.log(first_mass.gender);
// // // male


// // filter
// // 1.0
const less_height = characters.filter(({ height }) => height < 2.0);
  console.log(less_height);

// // 1.1
const allMale = characters.filter(({ gender }) => gender === 'male');
console.log(allMale);

// //map

characters.map((value, index) => {
    console.log(value.name);
});
characters.map((value, index) => {
    console.log(value.height);
});
let mass =
    characters.sort((a, b) => a.mass - b.mass);
console.log(mass);

let mass2 =
    characters.sort((a, b) => b.mass - a.mass);
console.log(mass2);

const isEverymass = characters.every(function (mass) {
    return mass > 40;
})
console.log(isEverymass);

const isEveryShort = characters.every(function (height) {
    return height < 2.0;

});
console.log(isEveryShort);

const isSomeBlue = characters.some(function (x) {
    return x.eye_color === 'blue';
});
console.log(isSomeBlue);

const isSome210 = characters.some(function (height) {
    return height > 2.10;

});
console.log(isSome210);
