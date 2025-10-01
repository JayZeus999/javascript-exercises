const findTheOldest = function (array) {
   let sorted = array.sort((a, b) => {
    // if no yearOfDeath, use current year
    const lastYearA = a.yearOfDeath || new Date().getFullYear();
    const lastYearB = b.yearOfDeath || new Date().getFullYear();

    const ageA = lastYearA - a.yearOfBirth;
    const ageB = lastYearB - b.yearOfBirth;

    return ageB - ageA; // oldest first
  });

  return sorted[0].name; // return name of oldest
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
