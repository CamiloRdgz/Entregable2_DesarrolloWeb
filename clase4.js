//Arrays
let numbers = [10.34, 1, 1000, 350.456];
const various = ['Camilo', true, 10, null, 3.0]

console.log(numbers);
console.log(various[0]);
console.log(various);

//We add a value at the end of the array
numbers.push("Colombia");
console.log(numbers);

//We remove the value at the end of the array
numbers.pop();
console.log(numbers);

//We add a value at the beginning of the array
numbers.unshift("Brasil");
console.log(numbers);

//We remove the value at the end of the array
numbers.shift();
console.log(numbers)

//Array only methods

//1 .reduce()
let reduced = numbers.reduce((acumulator, actual_value) => {
    return acumulator + actual_value;
});
console.log(reduced);


//2. .filter()
let filtered = numbers.filter(dato => {
    return dato > 10;
})
console.log(filtered);

let countries = ["Colombia", "Mexico", "Congo", "Comoros", "Seychelles", "Spain", "Venezuela", "Peru", "Bolivia"];

console.log(countries.filter(dato => {return dato.startsWith("Co")}));


//3. .map()
let mapping = countries.map(country => {return `Ejecuten a los de ${country}`});
console.log(mapping);
let mapping2 = numbers.map(squared => {return Math.pow(squared, 2)});
console.log(mapping2);


//4. .forEach()
console.time("first");
numbers.forEach(number => {console.log(number)});
console.timeEnd("first");

console.time("second");
for(let i = 0; i > numbers.length; i++) {
    console.log(numbers[i]);
}
console.timeEnd("second")

console.time("third");
for(let i of numbers){
    console.log(numbers[i]);
}
console.timeEnd("third");


//CREAR 4 ARREGLOS USANDO FUNCIONES (FLECHA)
//USAR METODOS DE ARREGLOS Y MOSTRAR RESULTADOS (PARA CADA ARREGLO MINIMO UN METODO (SON CUATRO ARREGLOS))