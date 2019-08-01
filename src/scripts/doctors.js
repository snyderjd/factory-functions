// ========== Practice: Doctors ==========

// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.
// 1. Doctor's name
// 2. Specialty (Oncologist, pediatrician, etc...)
// 3. Address of practice

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.
// 1. Pet name
// 2. Pet breed

// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const createDoctor = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

const createPet = (name, breed) => {
    return {
        name: name,
        breed: breed,
    }
}

const boots = createPet("Boots", "German Shepherd");
const brandy = createPet("Brandy", "Black Lab");
const sammy = createPet("Sammy", "Schnauser");

const BowWowKennels = [boots, brandy, sammy];

