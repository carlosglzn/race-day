// Random number between 0 and 999
let raceNumber = Math.floor(Math.random() * 1000);

// Was it registered early?
const registeredEarly = true;

// Runner's age
const age = 17;

// If the runner is an adult and has been registered early -> add 1000 to the race number
if (age >= 18 && registeredEarly) {
  raceNumber += 1000;
}

// We tell the runner that he/she will run at 9:30 am if he/she is an adult and registered early - if not registered early will run at 11:00 am
// If you are under age (regardless of registration) you will race at 12:30
if (age >= 18 && registeredEarly) {
  console.log('You will race at 9:30 am')
} else if (age >= 18 && !registeredEarly) {
  console.log('You will race at 11:00 am')
} else if (age < 18) {
  console.log('You will race at 12:30 pm')
}