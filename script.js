console.log(); // for line separation
const feet = Math.floor(Math.random() * 10 + 1); // feet component of height (random integer from 1 to 10)
const inches = Math.floor(Math.random() * 12); // feet component of height (random integer from 0 to 11)

const statNames = ['Outside Scoring', 'Inside Scoring', 'Defense', 'Athleticism', 'Playmaking', 'Rebounding'] // stat names for outputting
const stats = []; //stat numbers corresponding to index of stat name to be filled in
// randomly generate a number from 0 to 99 for each stat in statNames
statNames.forEach(stat => stats.push(Math.floor(Math.random() * 100)));

// calculate average/overall rating of player by averaging stat numbers together
const overall = Math.round(stats.reduce((currentSum, stat) => currentSum + stat) / stats.length);
// list of first and last names to randomly choose from to create name
const firstNames = ['Kobe', 'Shaquille', 'Klay', 'Stephen', 'De\'Aaron', 'Shai-Gilgeous', 'Tyrese', 'Jerry', 'Michael', 'LeBron'];
const lastNames = ['Bryant', 'O\'Neal', 'Thompson', 'Curry', 'Patpatyan', 'Fox', 'Alexander', 'Haliburton', 'Maxey', 'West', 'Jordan', 'James'];
// choose first and last name randomly
const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

// display full name of player
console.log(`Your players name is: ${firstName} ${lastName}`);

// display each stat of the created player below name
console.log('\nHere are the stats:');

for (let i = 0; i < stats.length; i++) {
    console.log(`${statNames[i]}: ${stats[i]}`);
}

// display overall rating
console.log(`Overall: ${overall}`);