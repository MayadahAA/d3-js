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


// find
// 1.0
let first_blue = characters.find(({eye_color}) => eye_color === 'blue');
console.log(first_blue.name);
// Leia Organa

// ========================================

// 1.1
// const first_mass = characters.find(({mass}) => mass > 50);
// console.log(first_mass.gender);
// // male


// filter
// 1.0
const less_height = characters.filter(({height}) => height < 2.0);
  console.log(less_height);
//   output
// {
//     name: 'Luke Skywalker',
//     height: 1.77,
//     gender: 'male',
//     mass: 77,
//     eye_color: 'brown'
//   },
//   {
//     name: 'Leia Organa',
//     height: 1.6,
//     gender: 'female',
//     mass: 56,
//     eye_color: 'blue'
//   },
//   {
//     name: 'Han Solo',
//     height: 1.8,
//     gender: 'male',
//     mass: 80,
//     eye_color: 'brown'
//   },
//   {
//     name: 'kevien',
//     height: 1.06,
//     gender: 'male',
//     mass: 32.2,
//     eye_color: 'red'
//   }



// 1.1
const allMale = characters.filter(({gender}) => gender === 'male');
console.log(allMale);
// output
// {
//     name: 'Luke Skywalker',
//     height: 1.77,
//     gender: 'male',
//     mass: 77,
//     eye_color: 'brown'
//   },
//   {
//     name: 'Han Solo',
//     height: 1.8,
//     gender: 'male',
//     mass: 80,
//     eye_color: 'brown'
//   },
//   {
//     name: 'Chewie',
//     height: 2.22,
//     gender: 'male',
//     mass: 190,
//     eye_color: 'black'
//   },
//   {
//     name: 'kevien',
//     height: 1.06,
//     gender: 'male',
//     mass: 32.2,
//     eye_color: 'red'
//   }
