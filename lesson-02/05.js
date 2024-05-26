let passport = {
    name: "Petr",
    surname: "Petrov",
};

const clone = { ...passport };

clone.name = 'Ivan';

console.log(passport.name);
console.log(clone.name);