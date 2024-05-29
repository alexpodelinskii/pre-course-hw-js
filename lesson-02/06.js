let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};


const clone2 = structuredClone(passportWithAddress);

passportWithAddress.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);
console.log(clone2.address.city);