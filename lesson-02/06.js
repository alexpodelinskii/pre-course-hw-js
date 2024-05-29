let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};


const clone = structuredClone(passportWithAddress);

passportWithAddress.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);
console.log(clone.address.city);