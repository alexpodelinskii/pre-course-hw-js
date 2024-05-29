let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};



const passportMarried2 = structuredClone(passportMarried);

passportMarried.married = true;

console.log(ppassportMarried);
console.log(passportMarried2);