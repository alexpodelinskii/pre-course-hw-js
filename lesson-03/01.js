// code
const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter(el => el !== "синий" && el !== "зеленый").join('-')
}

console.log(createColorString());
