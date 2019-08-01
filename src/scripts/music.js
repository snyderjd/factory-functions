// ============ Practice: Music Row ============
// Your job is to sign each of these promising young music stars to the appropriate label.

// - JumpStop Records works with Funk and Rap artists.
// - Chatten Records works with Country and Bluegrass artists.
// - Polar Records works with Pop artists.
// - Create an array for each of these record labels.

// Create a factory function for each possible genre(e.g.createBluegrassArtist()).Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

const jumpStop = [];
const chatten = [];
const polar = [];

const createCountryArtist = (name, age) => {
    return {
        name: name,
        genre: "Country",
        age: age
    };
};

const createPopArtist = (name, age) => {
    return {
        name: name,
        genre: "Pop",
        age: age
    };
};

const createFunkArtist = (name, age) => {
    return {
        name: name,
        genre: "Funk",
        age: age
    };
};

const createRapArtist = (name, age) => {
    return {
        name: name,
        genre: "Rap",
        age: age
    };
};

const createBluegrassArtist = (name, age) => {
    return {
        name: name,
        genre: "Bluegrass",
        age: age
    };
};

// - Bruce Atikins is a Country artist and is 23 years old
const bruceAtikins = createCountryArtist("Bruce Atikins", 23);
chatten.push(bruceAtikins);

// - Jensen Brown is a Pop artist and is 20 years old
const jensenBrown = createPopArtist("Jensen Brown", 20);
polar.push(jensenBrown);

// - Dre Funkz is a Funk artist and is 25 years old
const dreFunkz = createFunkArtist("Dre Funkz", 25);
jumpStop.push(dreFunkz);

// - Dusta Grimes is a Rap artist and is 21 years old
const dustaGrimes = createRapArtist("Dusta Grimes", 21);
jumpStop.push(dustaGrimes);

// - Bartholomew Danielson is a Bluegrass artist and is 23 years old
const bartDanielson = createBluegrassArtist("Bartholomew Danielson", 23);
chatten.push(bartDanielson);

// - Avilee Dallas is a Country artist and is 19 years old
const avileeDallas = createCountryArtist("Avilee Dalls", 19);
chatten.push(avileeDallas);

// - Austin Kinkaid is a Pop artist and is 22 years old
const austinKinkaid = createPopArtist("Austin Kinkaid", 22);
polar.push(austinKinkaid);

// - Loyoncé Branis is a Rap artist and is 27 years old
const loyonceBranis = createRapArtist("Loyonce Branis", 27);
jumpStop.push(loyonceBranis);

console.log(jumpStop);
console.log(chatten);
console.log(polar);


